import React, { useEffect } from 'react'
import { AboutHero } from '../about/AboutHero';
import { AboutMain } from '../about/AboutMain';

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <AboutHero />
      <AboutMain />      
    </div>
  )
}
