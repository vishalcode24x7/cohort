import React from 'react'
import axios from 'axios'

const App = () => {
  async function callapi(){
    console.log('api calling')
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/10");
    console.log(response)

  }
  return (
    <div>
      <button onClick={callapi}>Click it</button>
    </div>
  )
}

export default App