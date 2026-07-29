import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')

  const changetheme = ()=>{
    setTheme();
  }

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <form>
      </form>
    </div>
  )
}

export default App
