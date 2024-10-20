import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Blog from '../components/Blog'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </>
  )
}

export default HomePage
