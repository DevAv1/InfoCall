import React from 'react'
import './style.scss';
import ContactMobileCover from '../../../assets/covers/contact_cover.png'
import ContactMobileCoverMobile from '../../../assets/covers/big_cover_contact_mobile.png'

export const ContactHeader = () => {
  return (
    <div className="contact-hero">
      <div className="contact-hero-container">
        <img className="contact_cover" src={ContactMobileCover} alt="mobile cover"/>
        <img className="contact_mobile_cover__mobile" src={ContactMobileCoverMobile} alt="contactmobile_cover"/>
        <div className="contact-banner-text">
          בואו נעשה דברים גדולים
        </div>
      </div>    
    </div>
  )
}
