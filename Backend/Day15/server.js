require("dotenv").config()
const app = require("./src/app")
const connecToDatabase = require("./src/config/database")

connecToDatabase()

app.listen(3000, ()=>{
    console.log("server is running on 3000")
})