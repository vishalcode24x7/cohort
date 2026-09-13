require('dotenv').config()
const app = require("./src/app")
const connetToDatabase = require("./src/config/database")


connetToDatabase()
app.listen(3000, ()=>{
    console.log("Server is running of port no. 3000");
    
})