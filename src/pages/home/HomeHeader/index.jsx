import React from 'react';
import './style.scss';
import { Link } from 'react-scroll'
import HomeCover from '../../../assets/covers/big_cover_home_mobail_b.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const HomeHeader = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <div className="home_cover">
          <LazyLoadImage
              src={HomeCover}
              effect="blur"
              className="home_cover_mobile_img"
          />
        </div>
        <div className="banner-text">
          <div className="main-text">YOUR <span className="blued">VISION,</span><br/> OUR SUCCESS</div>
            <Link 
              to="box_container"
              smooth={true}    
              duration={1000}        
            >
              <div className="marked_text home-page" >בואו להכיר אותנו</div>
          </Link>
        </div>  
      </div>
    </div>
  )
}