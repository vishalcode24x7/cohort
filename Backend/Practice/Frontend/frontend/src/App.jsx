import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  console.log("hello");

  //All data fetched
  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }
  useEffect(() => {
    fetchNotes();
  }, []);


  //handle form and create Note
  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  //Deleting note
  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data);
      fetchNotes()
    })
  }

  //Update note
  function updateNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    
  }

  //render
  return (
    <>
      <form className="note-create" onSubmit={handleSubmit}>
        <h1>Note Writer</h1>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button className="create">Create</button>
      </form>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <div className="buttons">
                <button className="delete" onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
                <button className="update" >Update</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
