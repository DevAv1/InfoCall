import React from 'react'
import "./style.scss";
import { ContactMail } from '../ContactMail';
import { ContactLocations } from '../ContactLocations';

export const ContactMain = () => {

  return (
    <div className="contact-main">
      <ContactMail />
      <ContactLocations />
    </div>
  )
}
