import React, { useContext } from 'react'
import '../../styles/home/home_sec_two.css'
import emailjs from 'emailjs-com';
import { Button } from '@material-ui/core';

export const HomeSecTwo = () => {

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
    <div className="home_sec_two">
      <div className="contact_sec">
        <form className="form" onSubmit={sendEmail}>
          <div className="fnamelname-inputs">
            <input type="text" name="user_name" placeholder="שם מלא" required></input>
            <input type="text" name="user_phone" placeholder="מס' טלפון"></input>
          </div>
          <textarea className="textarea" name="message" id="message" placeholder="שתפו אותנו במה נוכל לעזור..." required></textarea>
          <Button variant="contained" color="primary"  type="submit">שלח הודעה</Button>  
        </form>
      </div>  
      <div className="contact_text">
        רוצים להכיר אותנו מקרוב או לשמוע יותר?
      </div>
    </div>
  )
}