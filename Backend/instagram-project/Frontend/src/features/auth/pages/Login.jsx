import React, { useState } from 'react'
import "../style/form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

 
const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {user, loading, handleLogin} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return (
      <h1>Loading</h1>
    )
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    await handleLogin(username, password)
      .then(res=>{
        console.log(res);
        navigate("/")
      })
    
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
