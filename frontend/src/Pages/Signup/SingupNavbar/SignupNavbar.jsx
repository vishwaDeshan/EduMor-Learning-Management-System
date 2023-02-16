import React from "react";
import "./SignupNavbar.css";
import Logo from "../../../Assets/LogoC.png";


function SignupNavbar() {
  return (
    <div className="login-page">
      <div className="signupnavbar">
        <div className="signuplogo">
          <img className="signuplogo-img" src={Logo} />
          <span className="signuptext">EduMor</span>
        </div>
        <div className="signupmenu">
          <ul>
            <li>Features</li>
            <li>Examinations</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignupNavbar;
