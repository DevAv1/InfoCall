import React from 'react'
import '../../styles/contact/contactMain.css';
import { ContactMail } from './ContactMail';
import { ContactLocations } from './ContactLocations';

export const ContactMain = () => {

  return (
    <div className="contact-main">
      <ContactMail />
      <ContactLocations />
    </div>
  )
}
