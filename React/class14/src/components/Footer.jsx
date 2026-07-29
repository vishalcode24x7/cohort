import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {

  const data = useContext(UserDataContext)

  return (
    <div className='absolute w-screen bottom-0 h-10 bg-blue-700'>
      Footer is {data}
    </div>
  )
}

export default Footer
