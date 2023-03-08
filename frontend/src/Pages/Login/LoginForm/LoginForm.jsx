import React, { useState } from "react";
import "./LoginForm.css";
import loginImg from "../../../Assets/imagelogin2.png";
import InputBox from "../../../Components/Inputs/Input";
import { Link } from "react-router-dom";
import Button from "../../../Components/Buttons/Button";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailError == 'none' && passwordError == 'none') {
      const data = {
        email, password
      };
      const { response, error } = await axios.post('http://localhost:8000/auth/login', data);
      if (error) {
        if(error.response.data.success===false){
          window.alert(error.response.data.msg);
        }else{
          window.alert(response.data.msg);
        }
    }
  }
  };

  return (
    <div className="login-container" style={{ display: "flex" }}>
      <div className="login-form">
        <h6>Hello!</h6>
        <h6 style={{ fontWeight: "bold" }}>Happy to see you again</h6>
        <h5>Login to your account</h5>
        <form onSubmit={handleSubmit}>
            <InputBox
            title="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              const inputEmail = e.target.value;
              if (!inputEmail) {
                setEmailError("The email cannot be empty");
              } else if (!inputEmail.includes("@")) {
                setEmailError('Email is not valid');
              } else {
                setEmailError('none');
                setEmail(inputEmail);
              }
            }}
          />
          {emailError !== 'none' && <div style={{ color: 'red' }}>{emailError}</div>}
          <InputBox
            title="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length < 8) {
                setPasswordError('Password must be at least 8 characters long');
              } else if (!e.target.value.match(/[a-z]/g)) {
                setPasswordError('Password must contain at least one lowercase letter');
              } else if (!e.target.value.match(/[A-Z]/g)) {
                setPasswordError('Password must contain at least one uppercase letter');
              } else if (!e.target.value.match(/[0-9]/g)) {
                setPasswordError('Password must contain at least one number');
              } else {
                setPasswordError('none');
                setPassword(e.target.value);
              }
            }}
          />
          {passwordError !== 'none' && <div style={{ color: 'red' }}>{passwordError}</div>}
        
        <div className="loginfeature">
          {/* <div className="check" style={{color:"#041083", fontSize:"small"}}>
          <input type="checkbox" id="remember" name="remember" /><label for="remember"> Remember me</label>
          </div> */}
          <Link to="/forgotPassword"><text>Forgot password?</text></Link>
        </div>
        <div className="loginbtn">
        <Button buttonName="Login" type="submit" />

        </div>
        </form>
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
