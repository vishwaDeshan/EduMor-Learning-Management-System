import React from 'react'   
import './CardWithButton.css'

export default function CardWithButton(props) {
  return (
    <div className='buttoncard'>
      <img src={props.secondaryimg} />
      <h6>{props.secondarycardtitle}</h6>
      <button type="button" value="trialexam" className="trialexambutton">
          Take a Trial
        </button>
    </div>
  )
}
