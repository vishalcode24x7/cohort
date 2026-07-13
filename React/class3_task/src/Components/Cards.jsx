import React from "react";
import { RiHeartFill } from "@remixicon/react";

const Cards = (props) => {
  return (
    <div className="h-86 w-70 bg-white rounded-3xl p-1 relative flex-shrink-0">
      <img className="rounded-3xl w-full h-30" src={props.Banner} alt="" />
      <img
        className="rounded-[50%] bg-amber-500 w-22 h-22 border-4 border-white absolute top-20 left-6"
        src={props.DP}
        alt=""
      />
      <h1 className="text-black font-bold mt-13 ml-7 text-xl">
        {props.username}
      </h1>
      <p className="text-gray-700 text-[12px] ml-7 mt-2 mr-5">{props.title}</p>

      <section className="text-black flex justify-around rounded-3xl bg-gray-100 border-1 border-gray-300 mt-3 py-3 shadow shadow-gray-300 ">
        <div className="text-xl font-semibold flex flex-col items-center">{props.like} <span className="text-sm text-gray-500">Likes</span></div>
        <div className="text-xl font-semibold flex flex-col items-center">{props.posts} <span className="text-sm text-gray-500">Posts</span></div>
        <div className="text-xl font-semibold flex flex-col items-center">{props.views} <span className="text-sm text-gray-500">views</span></div>
      </section>
      
    </div>

    
  );
}; 

export default Cards;
