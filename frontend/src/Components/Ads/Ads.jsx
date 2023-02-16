import React, { useEffect, useState } from 'react';
import ImageSlideshow from './ImageSlideshow';
import axios from 'axios';

const Ads = () => {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    function getAds() {
      axios.get('http://localhost:8000/advertisements').then((res) => {
        console.log(res.data.existingAds);
        setAds(res.data.existingAds)
      }).catch((err) => {
        alert(err.message)
      })
    }
    getAds();
  }, [])

  return (
    <div>
      <a href={ads.map(ad => ad.link)} target="_blank" rel="noopener noreferrer">
        <ImageSlideshow images={ads.map(ad => ad.image)} />
      </a>
    </div>
  );
};

export default Ads;
