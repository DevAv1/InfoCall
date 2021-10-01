import React, { useState, useContext } from 'react';
import '../styles/header.css';
// import InfoCallLogo from '../assets/infocall_logo2.png';
import InfoCallLogoNew from '../assets/LogoInfoCall.png';
import { Link } from 'react-router-dom';
import MobileLogo from '../assets/mobileLogo.png';

export const Header = () => {

  const [ mobileNav, setMobileNav ] = useState(false);

  return (
    <div className="header">
      <nav className="header-nav">
        <div className="hamburger" onClick={() => setMobileNav(!mobileNav)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
          <div className={!mobileNav ? "mobile_nav nav_closed" : "mobile_nav"}>
            {mobileNav &&
              <ul className="mobile-nav-wrapper">
                <Link to="/" onClick={() => setMobileNav(!mobileNav)}>
                  <li>בית</li>
                </Link>
                <Link to="/about" onClick={() => setMobileNav(!mobileNav)}>
                  <li>אודות</li>
                </Link>
                <Link to="/jobs" onClick={() => setMobileNav(!mobileNav)}>
                <li>דרושים ומשרות</li>
                </Link>
                <Link to="/contact" onClick={() => setMobileNav(!mobileNav)}>
                  <li>צרו קשר</li>
                </Link>
              </ul>
              
            }
           
          </div>
        <ul className="header-items">
          <Link to="/">
            <li>בית</li>
          </Link>
          <Link to="/about">
            <li>אודות</li>
          </Link>
          <Link to="/jobs">
           <li>דרושים ומשרות</li>
          </Link>
          <Link to="/contact">
            <li>צרו קשר</li>
          </Link>
        </ul>
        <div className="logo" >
          <Link to="/">
            <img className="desktop-logo" src={InfoCallLogoNew} alt="logo"/>
            <img className="mobile-logo" src={MobileLogo} alt="logo"/>
          </Link>
          
        </div>
      </nav>
    </div>
  )
}