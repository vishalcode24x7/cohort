import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [Gmail, setGmail] = useState("");
  const [Contact, setContact] = useState("");
  const [allusers, setallusers] = useState([]);

  function submitvalue(e) {
    e.preventDefault();
    const users = [...allusers];

    users.push({ name, Gmail, Contact });

    setallusers(users);

    console.log(users);
    setName("");
    setGmail("");
    setContact("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitvalue(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter Gmail"
          value={Gmail}
          onChange={(e) => {
            setGmail(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Contact no."
          value={Contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      {
        allusers.map(function(elem,idx){
          return <div className="main" key={idx}>
            <h2>{elem.name}</h2>
            <h4>{elem.Gmail}</h4>
            <h4>{elem.Contact}</h4>
          </div>
        })
      }
    </div>
  );
};

export default App;
