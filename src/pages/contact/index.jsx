import React, { useEffect } from 'react'
import { ContactHeader } from './ContactHeader';
import { ContactMain } from './ContactMain';

export const Contact = () => {  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact">
      <ContactHeader />
      <ContactMain />
    </div>
  )
}