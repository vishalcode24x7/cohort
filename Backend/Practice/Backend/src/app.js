const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("./public"))

//post
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"note created Sucessfully",
        note
    })
})

//get
app.get("/api/notes", async (req,res) =>{
   const notes = await noteModel.find()

   res.status(200).json({
    message: "Note fetch successfully",
    notes
   })
})

//delete
app.delete("/api/notes/:id", async (req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "note deleted successfully",
    })     
})

//patch
app.patch("/api/notes/:id", async (req,res)=>{
    const id = req.params.id
    const { description } = req.body 

    await noteModel.findByIdAndUpdate(id,{ description })
    res.status(200).json({
        message: "updated success fully"
    }) 
})
 
app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname, ".." ,"/public/index.html"))
}) 

module.exports = app 