import React from "react";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <div className="box">
        {num}
        
      </div>
      <button
        onClick={() => {
          const rdm = Math.floor(Math.random() * 100);
          setNum(rdm);
        }}
      >
        click here
      </button>
    </div>
  );
};

export default App;
