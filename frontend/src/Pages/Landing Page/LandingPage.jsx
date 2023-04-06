import React from 'react'
import './LandingPage.css'
import Heading from './Heading/Heading'
import MidSec from './MidSec/MidSec'
import Footer from '../../Components/Footer/Footer'


function LandingPage() {
  return (
    <div>
      <Heading />
      <MidSec />

      <div className='secondsectionhead'>
          <h5>About Us_______</h5>
          
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage

