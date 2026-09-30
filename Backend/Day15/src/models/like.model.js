const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: [true, "post id is required for creating a like"]
    },
    user: {
        type: String,
        required: [true, "user are required for like"]
    }  
}, {
    timestamps: true
})

likeSchema.index({post: 1, user: 1}, {unique: true})

const likeModel = mongoose.model("like", likeSchema)

module.exports = likeModel