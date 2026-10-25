import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import { sendEmail } from "../services/mail.service.js"

export async function register(req, res) {
    const { username, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { email },
            { username }
        ]
    })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists",
            success: false,
            error: "User already exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const emailVerificationToken = jwt.sign({
        email: user.email,
    }, process.env.JWT_SECRET)

    await sendEmail({
        to: email,
        subject: "Welcome to our app",
        html: `<h1>Welcome, ${username}!</h1>
               <p>Thank you for registering with our app.</p>
               <p>Please verify your email by clicking the link below:</p>
               <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>`,
        text: `Welcome, ${username}! Thank you for registering with our app.`
    })

    return res.status(201).json({
        message: "User registered successfully",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

}

export async function login(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(400).json({
            message: "User not found",
            success: false,
            error: "User not found"
        })
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password",
            success: false,
            error: "Invalid password"
        })
    }

    if (!user.verified) {
        return res.status(400).json({
            message: "Please verify your email before logging in",
            success: false,
            error: "Email not verified"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
    }, process.env.JWT_SECRET, { expiresIn: '14d' })

    res.cookie('token', token)

    res.status(200).json({
        message: "User logged in successfully",
        success: true,
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

export async function getMe(req, res) {
    const userId = req.user.id;

    const user = await userModel.findById(userId).select('-password');

    if (!user) {
        return res.status(404).json({
            message: "User not found",
            success: false,
            error: "User not found"
        })
    }

    res.status(200).json({
        message: "User fetched successfully",
        success: true,
        user
    })
}

export async function verifyEmail(req, res) {
    const { token } = req.query;

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({ email: decoded.email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid token",
                success: false,
                err: "User not found"
            })
        }

        user.verified = true;

        await user.save();

        const html = `<h1>Email verified successfully</h1>
                  <p>Your email has been verified successfully. You can now log in to your account.</p>
                  <a href="http://localhost:3000/login">Login</a>`

        return res.send(html);

    } catch (err) {
        return res.status(400).json({
            message: "Invalid token",
            success: false,
            err: err.message
        })
    }
}