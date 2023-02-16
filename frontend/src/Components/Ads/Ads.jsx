import React from 'react';
import ImageSlideshow from './ImageSlideshow';

const images = [
 
  'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fbf8993831f9_template_image_1606388115.webp',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-education-banner-ad-template-design-0c4dd789976fba20292b75f1a3f099d8_screen.jpg?ts=1619075849',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/study-abroad-modern-creative-education-advert-design-template-fe65662c2b23d374c79001d1804202e4_screen.jpg?ts=1641159132',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/higher-education-banner-ad-template-design-3fd8722fcc1fce675adee477e9fcf169_screen.jpg?ts=1621843628',
  'https://pbs.twimg.com/media/ESQ0av7XYAINLKl.jpg',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/study-abroad-advertisement-instagram-post-ban-design-template-e22121e5a57a5c7e26108a7d0ed92a7a_screen.jpg?ts=1623779720',
  'https://pbs.twimg.com/media/FaWOkSvVsAAjIMR?format=jpg&name=large'
]

const Ads = () => {
  return (
    <div>
      <ImageSlideshow images={images} />
    </div>
  );
};

export default Ads;
