import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)

  useEffect(function(){
    console.log("useEffect chal raha hai")
  },[num,num2  ])

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(Math.floor(Math.random()*100))
      }}>Change number 1</button>

       <h1>{num2}</h1>
      <button onClick={()=>{
        setNum2(Math.floor(Math.random()*100))
      }}>Change number 2</button>

       <h1>{num3}</h1>
      <button onClick={()=>{
        setNum3(Math.floor(Math.random()*100))
      }}>Change number 3</button>
    </div>
  )
}

export default App
