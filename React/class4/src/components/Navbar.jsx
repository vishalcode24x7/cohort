import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className='flex items-center justify-between p-4 m-1 text-white'>
      <h2>{props.title}</h2>
      <div className='flex gap-10 text-sm'>
          {
            props.links.map(function(elem){
              return <h4>{elem}</h4>
            })
          }
      </div>
    </div>
  )
}

export default Navbar
