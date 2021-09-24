import React, { useEffect } from 'react'
import '../../styles/home/home.css';
import { Hero } from './Hero';
import { Services } from '../home/Services';
import { HomeSecTwo } from '../home/HomeSecTwo';
import { HomeSecThree } from '../home/HomeSecThree';

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home_page">
      <Hero />
      <Services />
      <HomeSecThree />
      <HomeSecTwo />
    </div>
  )
}