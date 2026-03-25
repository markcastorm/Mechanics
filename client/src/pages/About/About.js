import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Team from '../../Components/Team'
import Values from './components/values'
import Impact from './components/impact'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'

function About() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Timeline/>
      <Team/>
      <Values/>
      <Impact/>
      <WhyUs/>
      <Gallery/>
      <Footer/>
      
      
      
    </div>
  )
}

export default About
