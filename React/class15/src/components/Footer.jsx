import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
   const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='Footer'>
      <h1>Footer</h1>
      {theme}
      <button onClick={()=>{
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
      }}>Change theme</button>
    </div>
  )
}

export default Footer
