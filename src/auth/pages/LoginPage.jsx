import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  

  const handleLogin = () => {
    login('Ulices Salvador')
    navigate('/', {
      replace: true
    })
  }


  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button onClick={handleLogin} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default LoginPage