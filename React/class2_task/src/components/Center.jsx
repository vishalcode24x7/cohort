import React from 'react'

const Center = () => {
  return (
    <div className='flex justify-center'>
    <div className='w-[95vw] h-[85vh] bg-[url(https://cdn.pixabay.com/photo/2019/05/22/20/38/tree-4222480_1280.jpg)] bg-cover rounded-3xl flex flex-col items-center'>
      <h1 className='mt-15 text-6xl text-purple-950'>Where Money Grows</h1>
      <p className='text-purple-950 mt-2 w-[25vw] text-center text-lg'>A programmable, utility-driven stable token desinged for native
        value accrual and seamless integration into Defi
      </p>
      <button className='bg-black text-white py-2 px-8 mt-5 rounded-4xl'>Try it now</button>
    </div>
    </div>
  )
}

export default Center
