import React from "react";
import "./UserNavbar.css";
import Logo from "../../Assets/LogoC.png";


function UserNavbar() {
  return (
    <div className="login-page">
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src={Logo} />
          <span className="text">EduMor</span>
        </div>
        <div className="menu">
          <ul>
            <li>Features</li>
            <li>Examinations</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <button type="button" value="signup" className="button">
          SignUp
        </button>
      </div>
    </div>
  );
}

export default UserNavbar;
