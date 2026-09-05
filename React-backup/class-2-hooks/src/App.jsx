import React, { useState } from 'react'
import Card from './Card';

const App = () => {

  const [a, seta] = useState(0)
  const users = [
    {
      DP: "https://i.pravatar.cc/150?img=1",
      Name: "Rahul Sharma",
      Title: "Frontend Developer"
    },
    {
      DP: "https://i.pravatar.cc/150?img=2",
      Name: "Priya Singh",
      Title: "UI/UX Designer"
    },
    {
      DP: "https://i.pravatar.cc/150?img=3",
      Name: "Aman Verma",
      Title: "Backend Developer"
    },
    {
      DP: "https://i.pravatar.cc/150?img=4",
      Name: "Sneha Kapoor",
      Title: "Full Stack Developer"
    },
    {
      DP: "https://i.pravatar.cc/150?img=5",
      Name: "Arjun Mehta",
      Title: "Software Engineer"
    }
  ];

  return (
    <div className='flex'>
      {users.map((user, index) => 
        (<Card key={index} user={user} />))}
    </div>
  )
}
export default App
