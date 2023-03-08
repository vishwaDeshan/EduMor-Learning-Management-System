import React from 'react'
import UserNavbar from '../../../Components/UserNavbar/UserNavbar'
import Img from "../../../Assets/resetPassword.jpg"
import './ResetPassword.css'
import Button from '../../../Components/Buttons/Button'
import { useLocation } from 'react-router-dom'

function ResetPassword() {
  const token=useLocation().search.slice(0, useLocation().search.length).split("=").pop();

  if(!token){
    return(
      <p>Token is not present</p>
    )
  }
  return (
    <div>
      <UserNavbar />
      <div className="forgot-password-container" style={{ display: "flex" }}>
        <div className="login-form">
          <h5>Enter New Password</h5>
          <form>
            <label className="inputbox">
              <h6 style={{ fontWeight: 600 }}>New Password*</h6>
              <input className="inputfield" type="password" name="password" />
            </label>
            <label className="inputbox">
              <h6 style={{ fontWeight: 600 }}>Confirm New Password*</h6>
              <input className="inputfield" type="password" name="password" />
            </label>
          </form>
          <div className="reset-password-btn">
            <Button buttonName="Reset Password" />
          </div>
        </div>
        <div className="reset-password-img">
          <img src={Img} />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword