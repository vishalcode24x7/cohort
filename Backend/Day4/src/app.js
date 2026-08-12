 const express = require("express")

 const app = express()

 app.use(express.json())

 const notes = [
    // {
    //     title:"test title 1",
    //     description:"test description 1"
    // }
 ]

 app.get("/", (req,res) =>{
    res.send("hello world") 
 })

 //POST
 app.post("/notes",(req,res) =>{
    // console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
 })


 //GET
 app.get("/notes",(req,res) =>{
    res.send(notes)
 })

 //DELETE
 app.delete("/notes/:index",(req,res) =>{
    // console.log(req.params);
    delete notes[ req.params.index ]
    res.send("deleted")
 })


 //patch
 app.patch("/notes/:index",(req, res) =>{
   notes[req.params.index].description = req.body.description
   res.send("note updated")
 })

 module.exports = app