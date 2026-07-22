import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [username, setUsername] = useState("");
  const [Role, setRole] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [Desc, setDesc] = useState("");

  const [allusers, setAllusers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const oldusers = [...allusers];
    oldusers.push({ username, Role, Desc, imgurl });

    setAllusers(oldusers);

    console.log(oldusers);

    setDesc("");
    setImgurl("");
    setRole("");
    setUsername("");
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
        {allusers.map(function (elem,idx) {
          return (
            <div key={idx} className="w-[20vw]  rounded-xl px-7 p-5 m-2 h-80 bg-white text-black text-center flex flex-col items-center gap-2">
              <img
                className="h-20 w-20 rounded-full object-center object-cover"
                src={elem.imgurl}
                alt=""
              />
              <h1 className="text-xl font-semibold">{elem.username}</h1>
              <h5 className="text-base text-blue-500 font-semibold my-3">
                {elem.Role}
              </h5>
              <p className="text-sm font-medium">
                {elem.Desc}
              </p>
              <button className="border-none bg-amber-900 text-white px-5 py-2 rounded">Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
