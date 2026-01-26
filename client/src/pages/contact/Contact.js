import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import LocationMap from './components/LocationMap'

function Contact() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ContactForm/>
        <LocationMap/>
        <Footer/>

    </div>
  )
}

export default Contact
