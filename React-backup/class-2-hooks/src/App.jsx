import React, { useState } from 'react'

const App = () => {

  const [a, seta] = useState(0)

  return (
    <div className='p-10'>
      <h1>{a}</h1>
      <button onClick={()=>{

        seta(a+1)
      }} className='px-8 py-3 rounded-md bg-blue-500 active:scale-95'>Change value</button>
    </div>
  )
}
export default App
