import React from 'react'
import ContactMobileCover from '../../assets/covers/contact_cover.png'
import ContactMobileCoverMobile from '../../assets/covers/big_cover_contact_mobile.png'
import '../../styles/contact/contactHero.css';

export const ContactHero = () => {
  return (
    <div className="contact-hero">
      <div className="contact-hero-container">
        <img className="contact_cover" src={ContactMobileCover} alt="mobile cover"/>
        <img className="contact_mobile_cover__mobile" src={ContactMobileCoverMobile}/>
        <div className="contact-banner-text">
          בואו נעשה דברים גדולים
        </div>
      </div>    
    </div>
  )
}
