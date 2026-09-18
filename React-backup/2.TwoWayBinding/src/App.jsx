import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [formData, setFormData] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name, Age)

    const newArr = [...formData]
    newArr.push({ name, Age })
    setFormData(newArr)

    console.log(newArr);

  }

  return (
    <div className='p-10 bg-black h-screen w-full'>
      <form onSubmit={submitHandler} className='w-60 h-60 gap-5 bg-gray-300 border rounded-2xl flex flex-col items-center justify-center'>

        <input value={name} onChange={(e) => {
          setName(e.target.value)
        }} className='border-2 border-black p-2 rounded-xl' type="text" placeholder='Enter your Name' />

        <input value={Age} onChange={(e) => {
          setAge(e.target.value)
        }} className='border-2 border-black p-2 rounded-xl' type="text" placeholder='Enter your Age' />

        <input className='border-2 py-3 px-8 rounded-2xl border-blue-950 bg-blue-400 text-white active:scale-95' type="submit" />
      </form>
      <div className='text-white'>
        {
          formData.map((item)=> {
            <div>
              <h1>{itme.name}</h1>
              <h1>{itme.Age}</h1>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
