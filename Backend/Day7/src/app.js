const express = require("express")
const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

const notes = []

//post
app.post("/notes", async (req, res) => {
    const { title, description, age } = req.body
    const note = await noteModel.create({
        title, description, age
    })

    res.status(201).json({
        message: "Note created",
        notes
    })
})

module.exports = app