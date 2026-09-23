import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [postData, setpostData] = useState(() => {
    const savedData = localStorage.getItem('FormData')

    return savedData ? JSON.parse(savedData) : []
  })

  // postData change hone par localStorage me save hoga
  useEffect(() => {
    localStorage.setItem('FormData', JSON.stringify(postData))
  }, [postData])


  const submitHandler = (e) => {
    e.preventDefault()

    setpostData([
      ...postData,
      {
        title,
        desc
      }
    ])

    settitle("")
    setdesc("")
  }

  const deleteHandler = (idx)=>{
    const copyArr = [...postData]
    copyArr.splice(idx, 1)

    setpostData(copyArr)
  }

  return (
    <div className='bg-black w-full h-screen p-5'>

      <form
        onSubmit={submitHandler}
        className='w-80 p-5 h-60 bg-zinc-500 rounded-md flex flex-col items-center justify-center gap-5'
      >

        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          className='border p-2 rounded-md w-[100%]'
          type="text"
          placeholder='Enter your name'
        />

        <input
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          className='border p-2 rounded-md w-[100%]'
          type="text"
          placeholder='Enter your Post Description'
        />

        <button className='px-8 py-3 bg-blue-500 rounded-md active:scale-95'>
          Create Post
        </button>

      </form>

      <Card postData={postData} deleteHandler={deleteHandler} />

    </div>
  )
}

export default App