import React, { useEffect, useState } from 'react';
import ImageSlideshow from './ImageSlideshow';
import React from 'react'
import './Ads.css'
import Ads1 from '../../Assets/Ads1.png'
import axios from 'axios';

const Ads = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    function getAds() {
      axios.get('http://localhost:8000/advertisements').then((res) => {
        // console.log(res.data.existingAds);
        setAds(res.data.existingAds)
      }).catch((err) => {
        alert(err.message)
      })
    }
    getAds();
  }, [])


function Ads() {
  return (
    <div className="ads">
      <img src={Ads1} alt="Ads" srcset=""/>
    </div>
  )
}

export default Ads