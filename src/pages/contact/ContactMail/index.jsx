import React from 'react'
import "./style.scss";
import { Button } from '@material-ui/core';
import emailjs from 'emailjs-com';

export const ContactMail = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_miwihch', 'template_wv4af0h', e.target, 'user_bgH4hhKfv0SwLG2MaQono')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-mail">
       <div className="contact_sec contact_page_sec">
        <div className="contact_title cp_title">בואו נדבר...</div>
        <form className="form form_contactus" onSubmit={sendEmail}>
          <input className="contact_input" type="text" name="user_name" placeholder="שם מלא" required></input>
          <input className="contact_input" type="text" name="user_phone" placeholder="טלפון"></input>
          <textarea className="contact_input" name="message" id="message" placeholder="שתפו אותנו במה נוכל לעזור..." required></textarea>
          <Button variant="contained" color="primary"  type="submit">שלח הודעה</Button>  
        </form>
      </div>  
    </div>
  )
}