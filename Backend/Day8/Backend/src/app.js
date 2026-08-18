const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

//Post
app.post("/api/notes", async (req,res)=>{
    const {title, description } = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:"note created successfully",
        note
    })
})


//Get
app.get("/api/notes", async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        messges:"Notes Fetched Successfully",
        notes
    })
})


//Delete
app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id
    
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        messges:"Note Deleted Successfully",
    })
})

//Patch
app.patch('/api/notes/:id', async (req,res) =>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, { description  })

    res.status(200).json({
        message:"Note Updated"
    })
})

module.exports = app 