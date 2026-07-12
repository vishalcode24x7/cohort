import React from "react";

const Card = (props) => {
    console.log(props.user)
  return (
    <div className="bg-white rounded text-red-500 w-40 py-3 px-5 m-5 ">
      <h1 className="text-3xl font-semibold">{props.user}</h1>
    </div>
  );
};

export default Card;
