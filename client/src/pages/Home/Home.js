import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSpecs from './components/TechnicalSpecs'
import Team from './components/Team'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <TechnicalSpecs/>
      <Team/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
