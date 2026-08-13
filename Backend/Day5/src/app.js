const express = require("express")

const app = express()

app.use(express.json())

const notes = []


//Post
app.post("/notes",(req,res) =>{
    notes.push(req.body)
    res.status(201).json({
        message: "Note created successfully"
    })
})


//Get
app.get("/notes",(req,res) =>{
    res.status(200).json({
        notes: notes
    })
})

//Delete notes/:index
app.delete("/notes/:index", (req, res) =>{
    delete notes[ req.params.index ]
    res.status(200).json({
        message:"Note deleted successfully"
    })
}) 

//patch
app.patch("/notes/:index", (req,res)=>{
    notes[req.params.index].description = req.body.description
    res.status(200).json({
        message:"note updated"
    })
})

module.exports = app 