import React from 'react';
import errorImage from '../../../Assets/ErrorImage.jpg'
import './ErrorPage.css';


const ErrorPage = () => {
  return (
    <div className='error-container' style={{fontFamily:'Lato'}}>
        <h1>OOPS!</h1>
        <h2>Page Not Found</h2>
        <img src={errorImage} alt="404 Error"/>

    </div>
  )
}

export default ErrorPage