import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = (props) => {
    const navigate = useNavigate()
  return (
    <div className='header'>
      <div className='logo'>
          <img src={logo}  alt='logo'/>
      </div>
      <button onClick={() => navigate(props.login ? "/signup" : "/login")}>
        {props.login ? "Sign Up" : "Log In"}
      </button>
    </div>
  )
}

export default Header
