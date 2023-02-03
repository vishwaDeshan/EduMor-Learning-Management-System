import React from 'react';
import './LoginForm.css';
import loginImg from '../../../Assets/imagelogin.png';

function LoginForm() {
  return (
    <div className="login-container" style={{display:'flex'}}>
    <div className="login-form">
      Username
    </div>
    <div className="login-img">
      <img src={loginImg} />
    </div>
  </div>
  )
}

export default LoginForm
