const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:String,
        password:String,
        email: {
            type:String,
            unique:[true,"same gmail not allowed"]
        },
    }
)
const userModel = mongoose.model('users',userSchema)
module.exports = userModel