import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"

export async function register(req, res) {
    const {username, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {email},
            {username}
        ]
    })

    if(isUserAlreadyExists){
        return res.status({
            message
        })
    }
}