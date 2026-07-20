import React from "react";

const App = () => {
  const [title, setTitle] = useState('');
  const [allusers, setAllusers] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault();
    const newAllUsers = []
 
    setTitle('');
  };
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
