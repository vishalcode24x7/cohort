import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-3xl h-screen bg-black text-white">
      <Navbar title="Textaura" color="purple" links={['Home', 'Text', 'Decorator', 'About','Contact']}/>
      <Navbar title="Sheryians" color="orange" links={['Home', 'Bootcamp', 'Courses', 'Classroom','Contact']}/>
      <Navbar title="Apple" color="Black" links={['Home', 'Products', 'services', 'About','Stores']}/>
    </div>
  );
};

export default App;
