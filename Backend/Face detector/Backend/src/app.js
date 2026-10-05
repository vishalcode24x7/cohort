const express = require("express")
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser());

const authRoutes = require('./routes/auth.routes')
app.use("/api/auth", authRoutes)

module.exports = app;

// 1 TASK
// userSchema.pre("save", function(next) { })
// userSchema.post("save", function(next) { })