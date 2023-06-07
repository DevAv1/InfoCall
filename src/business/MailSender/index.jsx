import React, { useState } from 'react'
import './style.scss';
import emailjs from 'emailjs-com';
import { Button } from '@material-ui/core';
import { TextInput } from '../TextInput';
import { TextArea } from '../TextArea';
import HalfCircle from '../../assets/mokdwi_mechirot.png';
import Lottie from 'lottie-react';
import contactAnimation from '../../assets/lottieAnimations/contact-animation.json';

export const MailSender = () => {
  const [mailAnimationClass, setMailAnimationClass] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_miwihch', 'template_wv4af0h', e.target, 'user_bgH4hhKfv0SwLG2MaQono')
      .then((result) => {
          console.log(result.text);
          setMailAnimationClass('mail-sent-animation');
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="mail-sender">
      <img className="half_circle_decoration" src={HalfCircle} alt="half_circle"/>
      <div className="contact_text">
        רוצים להכיר אותנו מקרוב או לשמוע יותר?
      </div>
      <div className={`lottie-animation-container ${mailAnimationClass && mailAnimationClass}`}>
        <Lottie
          animationData={contactAnimation}
        />
      </div>
      <div className="contact_sec">
        <form className="form" onSubmit={sendEmail}>
          <div className="fnamelname-inputs">
            <TextInput label="שם מלא" name="user_name" />
            <TextInput label="מס' טלפון" name="user_phone" />
          </div>
          <TextArea name="message" label="שתפו אותנו במה נוכל לעזור." />
          <Button variant="contained" color="primary"  type="submit">שלח הודעה</Button>  
        </form>
      </div>  
    </div>
  )
}