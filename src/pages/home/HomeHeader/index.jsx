import React from 'react';
import './style.scss';
import { Link } from 'react-scroll'
import HomeCover from '../../../assets/covers/big_cover_home_mobail_b.png';

export const HomeHeader = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <div className="home_cover">
          <img src={HomeCover} className="home_cover_mobile_img"/>
        </div>
        <div className="banner-text">
          <div className="main-text">YOUR <span className="blued">VISION,</span><br/> OUR SUCCESS</div>
            <Link 
              to="box_container"
              smooth={true}    
              duration={1000}        
            >
            <a href="#box_container">
              <div className="marked_text home-page" >בואו להכיר אותנו</div>
            </a>
          </Link>
        </div>  
      </div>
    </div>
  )
}