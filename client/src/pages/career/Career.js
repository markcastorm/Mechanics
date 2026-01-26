import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './components/Hero'
import Footer from '../../Components/Footer'

import Values from './components/Values'
import JobsList from './components/JobsList'


function Career() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Values/>
        <JobsList/>
        
        <Footer/>
      
    </div>
  )
}

export default Career
