import React from 'react'
import Logo from '../assets/infocall_logo2.png'
import '../styles/intro.css'

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-banner">
        <img src={Logo} alt="logo"/>
        <div className="welcome">Welcome</div> 
      </div>
    </div>
  )
}
