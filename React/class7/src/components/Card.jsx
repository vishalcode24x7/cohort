import React from "react";

const Card = (props) => {
  return (

    <div
      className="w-[20vw]  rounded-xl px-7 p-5 m-2 h-80 bg-white text-black text-center flex flex-col items-center gap-2"
    >
      <img
        className="h-20 w-20 rounded-full object-center object-cover"
        src={props.elem.imgurl}
        alt=""
      />
      <h1 className="text-xl font-semibold">{props.elem.username}</h1>
      <h5 className="text-base text-blue-500 font-semibold my-3">
        {props.elem.Role}
      </h5>
      <p className="text-sm font-medium">{props.elem.Desc}</p>
      <button
        onClick={() => {
          props.deleteHandler(props.idx);
        }}
        className="border-none bg-amber-900 text-white px-5 py-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
