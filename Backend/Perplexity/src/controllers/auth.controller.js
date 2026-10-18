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

    await sendEmail({
        to: email,
        subject: "Welcome to our app",
        html: `<h1>Welcome, ${username}!</h1><p>Thank you for registering with our app.</p>`,
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