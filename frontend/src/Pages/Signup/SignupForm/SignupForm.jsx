import React, { useState} from "react";
import "../SignupForm/SignupForm.css";
import InputBox from "../../../Components/Inputs/Input";
import Button from "../../../Components/Buttons/Button";
import { Link } from "react-router-dom";
import SignupImg from "../../../Assets/sign-up-concept-illustration_114360-7875.png";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log("Valid form");
      // Do something with the form data
    } else {
      console.log("Invalid form", errors);
      setErrors(errors);
    }
  };

  const validate = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!birthdate) {
      errors.birthdate = "Birthdate is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }
    return errors;
  };

  return (
    <div className="signup-container" style={{ display: "flex" }}>
      <div className="login-form">
        <h5>SignUp Now for EduMor</h5>
        <form onSubmit={handleSubmit}>
          <InputBox
            title="First Name"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            error={errors.firstName}
          />
          <InputBox
            title="Last Name"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            error={errors.lastName}
          />
          <InputBox
            title="BirthDate"
            type="date"
            value={birthdate}
            onChange={(event) => setBirthdate(event.target.value)}
            error={errors.birthdate}
          />
          <InputBox
            title="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
          />
          <InputBox
            title="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={errors.password}
          />
          <InputBox 
          title="Confirm Password" 
          type="password" 
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          error={errors.confirmPassword}
          />
          <InputBox 
          title="Phone Number" 
          type="tel" 
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          error={errors.phoneNumber}
          />
          <div className="loginbtn">
          {/* <Button type="submit" text="Sign Up" /> */}
          </div>
        </form>

        <div className="loginbtn">
          <Button buttonName="Submit" onClick={handleSubmit} />
        </div>

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
