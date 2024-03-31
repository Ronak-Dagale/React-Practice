import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Pricingcard from '../components/Pricingcard'
import Work from '../components/Work'
const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading='PROJECTS.' text='Some of My most recent works' />
      <Work />
      <Pricingcard />
      <Footer />
    </div>
  )
}

export default Project
