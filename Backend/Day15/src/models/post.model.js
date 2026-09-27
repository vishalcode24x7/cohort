const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imgUrl: {
        type: String,
        required: [true, "img is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: [true, "User id id required"]
    }
})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel