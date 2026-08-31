import React from 'react'

const Card = ({user}) => {
    console.log(user)
  return (
    <div className="card">
        <img src={user.dp} alt={user.name} className="image" />
        <h2>{user.name}</h2>
        <p>{user.title}</p>
      </div>
  )
}

export default Card
