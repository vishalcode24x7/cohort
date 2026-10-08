const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const authRoutes = require('./routes/auth.routes')
app.use("/api/auth", authRoutes)

module.exports = app;

// 1 TASK
// userSchema.pre("save", function(next) { })
// userSchema.post("save", function(next) { })