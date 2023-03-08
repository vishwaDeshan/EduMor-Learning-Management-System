import React from 'react'
import Button from '../../../Components/Buttons/Button'
import UserNavbar from '../../../Components/UserNavbar/UserNavbar'
import Img from "../../../Assets/forgotPassword.jpg"
import './ForgotPassword.css'

function ForgotPassword() {
  return (
    <div>
      <UserNavbar/>
      <div className="forgot-password-container" style={{ display: "flex" }}>
      <div className="login-form">
        <h5>Forgot your password</h5>
        <span>Enter your email address and we will send you the recovery link</span>
        <form>
          <label className="inputbox">
            <h6 style={{fontWeight:600}}>Email</h6>
            <input className="inputfield" type="email" name="email" />
          </label>
        </form>
        <div className="forgot-password-btn">
        <Button buttonName="Reset Password" />
        </div>
      </div>
      <div className="forgot-password-img">
        <img src={Img} />
      </div>
    </div>
    </div>
  )
}

export default ForgotPassword