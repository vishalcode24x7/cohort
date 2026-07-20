import React from "react";
import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState("");
  const [allusers, setAllusers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = [...allusers];

    newAllUsers.push(title)
    setAllusers(newAllUsers)
    console.log(newAllUsers)
    
    
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      {
        allusers.map(function(elem,idx){
          return <h4 key={idx}>{elem}</h4>
        })
      }
    </div>
  );
};

export default App;
