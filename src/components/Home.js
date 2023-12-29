import React from 'react'
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate(); 

  return (
    <div className='banner-bg'>
        <div>
        <button className='home-signUp' onClick={()=>navigate("/registration")}>Sign Up</button>
    <button className='home-logIn' onClick={()=>navigate('/login')}>Log In</button>
        </div>
    </div>
  )
}

export default Home