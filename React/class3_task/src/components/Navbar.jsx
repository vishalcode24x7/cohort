import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-10 cursor'>
      <div className="text-2xl font-bold items-center text-purple-950">BloomFi</div>
      <div className="center">
        <ul className='flex gap-10 text-purple-950'>
          <li>USD bloom</li>
          <li>Busines</li>
          <li>Treasury</li>
          <li>Developers</li>
          <li>Join us</li>
        </ul>
      </div>
      <div className="px-7 py-1.5 bg-purple-950 text-white rounded-3xl">Launch BETA</div>
    </div>
  )
}

export default Navbar
