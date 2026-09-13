const express = require("express")
const userModel = require("../models/user.model")

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
    const { email, username, password, bio, profileImage } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $oe: [
            { email },
            { username }
        ]
    })
    if (isUserAlreadyExists) {
        return res.status(409)
            .json({
                message: "User already exists" + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists")
            })
    }
})