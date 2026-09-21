import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router'
import axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    
  }


  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => { setUsername(e.target.value) }}
            type="text"
            name='username'
            placeholder='Enter username' />

          <input
            onChange={(e) => { setPassword(e.target.value) }}
            type="password"
            name='password'
            placeholder='Enter password' />
          <button type='submit'>submit</button>
        </form>
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Regiseter </Link></p>
      </div>
    </main>
  )
}

export default Login
