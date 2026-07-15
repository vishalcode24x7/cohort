import React from "react";
import { useState } from "react";

const App = () => {
  const [marks, setMarks] = useState([54, 65, 76, 32, 11]);
  function graceStudent() {
    const newmarks = marks.map(function (elem) {
      return elem + 5;
    });
    setMarks(newmarks)
    console.log(newmarks)
  }

  return (
    <div className="main">
      {marks.map(function (elem, idx) {
        return (
          <h1 key={idx}>
            student {idx+1} = {elem}
             ({elem>33?'PASS':'FAIL'})
          </h1>
        );
      })}
      <button onClick={graceStudent}>Give them grace</button>
    </div>
  );
};

export default App;
