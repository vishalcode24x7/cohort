import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <h1>This is {props.theme}</h1>
      <button onClick={()=>{
        props.setTheme('dark')
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
