import React from 'react'
import adsData from '../../Data/Ads'
import './Slideshow.css'
import ads1 from '../../Assets/Ads1.png'

function ads() {
    return (
        <div className='ads-container'>
            <img src={ads1} className="ads" />
        </div>
        
    )
}

export default ads