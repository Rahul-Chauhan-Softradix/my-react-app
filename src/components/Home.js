import React from 'react'
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();

  const urlString = window.location.href
  console.log(urlString,'------urlString--------')

  const url = new URL(urlString);
  const params = new URLSearchParams(url.search);

  // Accessing individual parameters
  const param1Value = params.get('redirect_uri');
  console.log(param1Value,'------param1Value--------')

  return (
    <div className='banner-bg'>
      <div>
        <button className='home-signUp' onClick={() => navigate("/registration")}>Sign Up</button>
        <button className='home-logIn' onClick={() => navigate('/login?redirect_uri=https://softradixsso.mybigcommerce.com/login/token/')}>Log In</button>
      </div>
    </div>
  )
}

export default Home