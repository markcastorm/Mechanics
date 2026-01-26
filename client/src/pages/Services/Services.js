import React from 'react'
import Hero from './components/Hero'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import ServiceContent from './components/ServiceContent'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function Services() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ServiceContent/>
      <HowItWorks/>
      <CTA/>
      <Footer/>

    </div>
  )
}

export default Services
