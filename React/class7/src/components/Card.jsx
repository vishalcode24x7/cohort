import React from 'react'

const Card = () => {
  return (
    <div className='w-[24vw] lg:bg-green-400 rounded-xl px-7 p-5 m-2 h-80 bg-white text-black text-center flex flex-col items-center gap-2'>
      <img className='h-20 w-20 rounded-full' src="https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
      <h1 className='text-xl font-semibold'>Vishal kumar</h1>
      <h5 className='text-base text-blue-500 font-semibold my-3'>Developer</h5>
      <p className='text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ducimus.</p>
    </div>
  )
}

export default Card
