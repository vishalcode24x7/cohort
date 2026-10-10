const express = require("express")
const cookieParser = require('cookie-parser')
const cors = require("cors")
const path = require("path")

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.static("./public"))

//routes
const authRoutes = require('./routes/auth.routes')
app.use("/api/auth", authRoutes)

const songRoutes = require("./routes/song.routes")
app.use("/api/songs", songRoutes)

// app.use('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','..' ,'index.html'))
// })
 
module.exports = app;
