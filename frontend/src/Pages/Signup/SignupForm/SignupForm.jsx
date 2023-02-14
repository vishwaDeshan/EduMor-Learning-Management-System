import React from "react";
import "../SignupForm/SignupForm.css";
import InputBox from "../../../Components/Inputs/Input";
import Button from "../../../Components/Buttons/Button"
import { Link } from "react-router-dom";
import SignupImg from "../../../Assets/sign-up-concept-illustration_114360-7875.png"

function SignupForm() {
  return (
    <div className="signup-container" style={{ display: "flex" }}>
      <div className="login-form">
        <h5>SignUp Now for EduMor</h5>
        
        <form>
         <InputBox title="First Name" type="text" />
         <InputBox title="Last Name" type="text" />
         <InputBox title="BirthDate" type="date" />
         <InputBox title="Email" type="email" />
         <InputBox title="Password" type="password" />
         <InputBox title="Confirm Password" type="password" />
         <InputBox title="Phone Number" type="tel" />
        </form>

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

      <div className="signup-img">
        <img src={SignupImg} /> 
      </div>
    </div>












    // <div className="signupcontainer">
    //   <h4 className="heading">SignUp Now for EduMor</h4>
    //   <div className="formCont">
    //   <InputBox title="First Name" type="text" />
    //   <InputBox title="Last Name" type="text" />
    //   <InputBox title="Birthdate (DD/MM/YYYY)" type="date" />
    //   <InputBox title="Email" type="text" />
    //   <InputBox title="Password" type="password" />
    //   <InputBox title="Confirm Password" type="password" />
    //   <InputBox title="Phone Number" type="tel" />
    //   </div>
    // <div className="btnCont">
    // <Button buttonName="Next" />

    // </div>
      
    // </div>
  );
}

export default SignupForm;
