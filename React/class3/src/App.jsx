import React from 'react'
import Card from './components/card';

const App = () => {
  const users = ['vishal', 'anshu', 'harsh', 'chetan']
  return (
    <div className='p-3 h-screen bg-black text-white'>
      {
        users.map(function(elem){
          return <Card user={elem}/>
        })
      }
    </div>
  )
}

export default App
