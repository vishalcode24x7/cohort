import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("submitted");
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
