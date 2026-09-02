const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique : [true, "User name already exists"],
        require: [true, "User name is required"]
    },
    email:{
        type: String,
        unique : [true, "Email already exists"],
        require: [true, "Email is required"]
    },
    password:{
        type: String,
        require: [true, "Password is required"]
    },
    bio:{
        type: String,
    },
    profileImage:{
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel