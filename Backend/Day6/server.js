

const app = require("./src/app")
const mongoose = require("mongoose")

//function
function connectToDb(){
    mongoose.connect("mongodb+srv://lxvishaaallll_db_user:HPmyOshsCIKgMJDx@cluster0.xm9jugc.mongodb.net/day-6")
    .then(()=>{
        console.log("connected to Database")
    }) 
     

}
connectToDb()
 
app.listen(3000, ()=>{
    console.log("server is running on 3000");
})