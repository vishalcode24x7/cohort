import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="topNav">Horizon Courts</div>
      <div className="centerNav">
        <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Coaches</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Contacts</a></li>
        </ul>
      </div>
      <div className="bottomNav button">Book now ↗</div>  
    </div>
  )
}

export default Navbar
