import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {

  const data = useContext(UserDataContext)
  console.log(data);
  

  return (
    <div className='h-10 w-full bg-emerald-600 '>
      Navbar is {data}
    </div>
  )
}

export default Navbar
