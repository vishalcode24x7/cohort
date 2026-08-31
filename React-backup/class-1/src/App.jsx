import React from 'react'
import Card from './components/Card'

const App = () => {
  const user = [
    {
      dp: "https://i.pravatar.cc/150?img=1",
      name: "Rahul Sharma",
      title: "Frontend Developer"
    },
    {
      dp: "https://i.pravatar.cc/150?img=2",
      name: "Priya Singh",
      title: "UI/UX Designer"
    },
    {
      dp: "https://i.pravatar.cc/150?img=3",
      name: "Aman Verma",
      title: "Backend Developer"
    },
    {
      dp: "https://i.pravatar.cc/150?img=4",
      name: "Neha Gupta",
      title: "Product Manager"
    },
    {
      dp: "https://i.pravatar.cc/150?img=5",
      name: "Arjun Mehta",
      title: "Full Stack Developer"
    }
  ];
  return (
    <div className="App">
      {user.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  )
}

export default App
