import React from 'react'
import './LandingCard.css'

export default function LandingCard(props) {
  return (
    <div className='card'>
      <img src={props.img} />
      <h5>{props.firstTitle}</h5>
      <text>{props.secondText}</text>
    </div>
  )
}
