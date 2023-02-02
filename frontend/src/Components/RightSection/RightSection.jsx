import React from 'react'
import MiniCalendar from '../MiniCalander/MiniCalander'
import './RightSection.css'
import Slideshow from '../Slideshow/Slideshow'

function RightSection() {
  return (
    <div className="rightSection" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="vaccancy">
        <Slideshow/>
      </div>
      <div className="calander" >
        <MiniCalendar />
      </div>
    </div>
  )
}

export default RightSection