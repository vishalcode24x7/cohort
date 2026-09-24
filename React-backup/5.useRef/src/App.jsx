
import React, { useRef } from "react";

const App = () => {

  console.log("App rendering");
  const inputRef1 = useRef();
  const inputRef2 = useRef();




  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputRef1.current.value);
    console.log(inputRef2.current.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form onSubmit={submitHandler} className="bg-gray-900 p-8 rounded-xl shadow-2xl w-96 border border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">User Form</h1>

        <div className="mb-4">
          <input
            ref={inputRef1}
            type="text"
            name='name'
            placeholder="Enter your name"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>

        <div className="mb-6">
          <input
            ref={inputRef2}
            name="age"
            type="number"
            placeholder="Enter your age"
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
