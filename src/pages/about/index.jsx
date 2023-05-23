import React, { useEffect } from 'react'
import { AboutHeader } from './AboutHeader';
import { AboutContent } from './AboutContent';

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <AboutHeader />
      <AboutContent />      
    </div>
  )
}
