import React, { useState} from "react";
import "../SignupForm/SignupForm.css";
import InputBox from "../../../Components/Inputs/Input";
import Button from "../../../Components/Buttons/Button";
import { Link } from "react-router-dom";
import SignupImg from "../../../Assets/sign-up-concept-illustration_114360-7875.png";


function SignupForm() {
    
    const [fname, setFirstname] = useState('');
    const [lname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [emailError, setEmailError] = useState('');
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmpasswordError, setConfirmPasswordError] = useState('');
    const [phonenumberError, setPhoneNumberError] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleFirstName = (event) => {
      setFirstname(event.target.value);
    };
    
    const handleLastName = (event) => {
      setLastname(event.target.value);
    };

    // const handlePhoneNumberChange = (event) => {
    //   setPhoneNumber(event.target.value);

    // };  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    
    };
    
  

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };  

    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

      if (!fname) {
        setFnameError("The First Name cannot be empty");}
    
       else if (/\d/.test(fname)) {
        setFnameError('Name should not contain numbers');}
      else {
        setFnameError("");
      }

      if (!lname) {
        setLnameError("The Last Name cannot be empty");}
    
       else if (/\d/.test(lname)) {
        setLnameError('Name should not contain numbers');}
      else {
        setLnameError("");
      }
      if (phonenumber.length !== 10) {
        setPhoneNumberError('Phone number is not valid');
      } else {
        setPhoneNumberError('');
      }

      // if (!/^[0-9\b]+$/.test(phonenumber)) {
      //   setPhoneNumberError('Phone number must contain only digits');
      //  if (inputValue.length !== 10) {
      //   setPhoneNumberError('Phone number must be exactly 10 digits long');
      // if (phonenumber.length !==10) {
      //   setPhoneNumberError('Phone number must be exactly 10 digits long');
      // } else {
      //   setPhoneNumberError("");
      // }
    
      if (!email) {
        setEmailError("The email cannot be empty");
      } else if (!email.includes("@")) {
        setEmailError("Email should contain @ sign");
      } else {
        setEmailError("");
      }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!password.match(/[a-z]/g)) {
      setPasswordError('Password must contain at least one lowercase letter');
    } else if (!password.match(/[A-Z]/g)) {
      setPasswordError('Password must contain at least one uppercase letter');
    } else if (!password.match(/[0-9]/g)) {
      setPasswordError('Password must contain at least one number');
    } else {
      setPasswordError('Password is valid');
    }

    if (!confirmPassword) {
      setConfirmPasswordError("This field cannot be empty");}
    else if (password !== confirmPassword) {
      setConfirmPasswordError('Password does not match');
    } else {
      setConfirmPasswordError('Password matches ✓');
    }
  };
  

  
  return (
    <div className="signup-container" style={{ display: "flex" }}>
      <div className="login-form">
        <h5>SignUp Now for EduMor</h5>
        <form onSubmit={handleSubmit}>

        <InputBox
            title="First Name"
            name="fname"
            type="fname"
            value={fname}
            onChange={handleFirstName}
           
        
          />
           {fnameError && <div style={{color:'red'}}>{fnameError}</div>}
           <InputBox
            title="Last Name"
            name="lname"
            type="lname"
            value={lname}
            onChange={handleLastName}
        
          />
          {lnameError && <div style={{color:'red'}}>{lnameError}</div>}

          <InputBox
            title="Phone Number"
            name="phonenumber"
            type="tel"
            value={phonenumber}
            onChange={handlePhoneNumberChange}
          />
          {phonenumberError && <div style={{color:'red'}}>{phonenumberError}</div>}

          <InputBox
            title="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
        
          />
           {emailError && <div style={{color:'red'}}>{emailError}</div>}

          <InputBox
            title="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div style={{color:'red'}}>{passwordError}</div>}

          <InputBox
            title="Confirm Password"
            name="confirmpassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
           {confirmpasswordError && <div style={{color:'red'}}>{confirmpasswordError}</div>}

           

          <div className="loginbtn">
          <Button buttonName="Submit" type="submit" />
         
        </div>
        </form>

        

        <div className="signup">
          <div>
            <text>Already have an account?</text>
          </div>

          <div>
            <Link to="/Login">
              <h6>
                <u>Login</u>
              </h6>
            </Link>
          </div>
        </div>
      </div>

      <div className="signup-img">
        <img src={SignupImg} />
      </div>
    </div>
  );
}

export default SignupForm;
