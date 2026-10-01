const mongoose = require("mongoose")

async function connecToDatabase() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to DB")
}

module.exports = connecToDatabase