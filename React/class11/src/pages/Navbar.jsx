import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center bg-pink-400">
      <h2 className="text-3xl font-semibold">NAVBAR</h2>
      <div className="flex gap-5 text-2xl">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
