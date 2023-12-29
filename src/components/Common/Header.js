import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  let logOut = ()=>{
    localStorage.removeItem('authToken');
    navigate('/login')
  }

  
  return (
    <div className='header'>
      <div className='header-layout'></div>
        <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Header