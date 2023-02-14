import React from "react";
import "./LoginForm.css";
import loginImg from "../../../Assets/imagelogin2.png";
import { Link } from "react-router-dom";
import Button from "../../../Components/Buttons/Button"

function LoginForm() {
  return (
    <div className="login-container" style={{ display: "flex" }}>
      <div className="login-form">
        <h6>Hello!</h6>
        <h6 style={{ fontWeight: "bold" }}>Happy to see you again</h6>
        <h5>Login to your account</h5>
        <form>
          <label className="inputbox">
            <h6 style={{fontWeight:600}}> Username: </h6>
            <input className="inputfield" type="text" name="username" />
          </label>
          <label className="inputbox">
            <h6 style={{fontWeight:600}}> Password: </h6>
            <input className="inputfield" type="password" name="password" />
          </label>
        </form>
        <div className="loginfeature">
          <div className="check" style={{color:"#041083", fontSize:"small"}}>
          <input type="checkbox" id="remember" name="remember" /><label for="remember"> Remember me</label>
          </div>
          <text>Forgot password?</text>
        </div>
        <div className="loginbtn">
        <Button buttonName="Login" />

        </div>

        <div className="signup">
          <div><text>Don't have an account?</text></div>
          <div>
            <Link to='/Signup'>
            <h6><u>Sign-Up</u></h6>
            </Link>
          </div>
        </div>
      </div>
      <div className="login-img">
        <img src={loginImg} />
      </div>
    </div>
  );
}

export default LoginForm;
