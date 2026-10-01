const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, "User name already exists"],
        require: [true, "User name is required"]
    },
    email:{
        type: String,
        unique: [true, "email already exists"],
        require: [true, "email is required"]
    },
    password:{
        type: String,
        require: [true, "password is required"]
    },
    bio:{
        type: String,
    },
    profileImage:{
        type: String,
        default: "https://ik.imagekit.io/vishallx/default.jpg?updatedAt=1789316217032"
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel