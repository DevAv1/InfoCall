import React, { useEffect } from 'react'
import { ContactHero } from './ContactHero';
import { ContactMain } from './ContactMain';
import { ContactLocations } from './ContactLocations';
export const Contact = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact">
      <ContactHero />
      <ContactMain />
    </div>
  )
}