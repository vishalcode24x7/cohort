import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [username, setUsername] = useState("");
  const [Role, setRole] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [Desc, setDesc] = useState("");
  
  const [allusers, setAllusers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const oldusers = [...allusers]
    oldusers.push({username,Role,Desc,imgurl})

    setAllusers(oldusers)

    console.log(oldusers);


    setDesc('')
    setImgurl('')
    setRole('')
    setUsername('')
  };

  return (
    <div className="h-screen bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap p-2 items-center justify-center"
      >
        <input
          className="border-2 px-5 py-5 rounded m-2 w-[48%]"
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 py-5 rounded m-2 w-[48%]"
          type="text"
          placeholder="Enter IMG URL"
          value={imgurl}
          onChange={(e) => {
            setImgurl(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 py-5 rounded m-2 w-[48%]"
          type="text"
          placeholder="Enter Description"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input
          className="border-2 px-5 py-5 rounded m-2 w-[48%]"
          type="text"
          placeholder="Enter Role"
          value={Role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <button className="active:scale-95 cursor-pointer font-semibold px-5 bg-emerald-700 py-5 rounded-xl m-2 w-[48%]">
          Create User
        </button>
      </form>
      <div className="px-2 py-10 flex flex-wrap justify-center">
          {allusers.map(function(){
            return <Card />
          })}
      </div>
    </div>
  );
};

export default App;
