import React from "react";
import axios from "axios";
import { useState } from "react";
import User from "./components/user";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  async function getdata() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setAllUsers(response.data);
  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
      <div className="all-cards">
        {allUsers.map(function (elem, idx) {
          return <div key={idx}>
            <User elem={elem} />
          </div>
        })}
      </div>
    </div>
  );
};

export default App;
