import React from 'react';
import "../Admin Signup/Adminsignup.css";
import SignupNavbar from '../Signup/SingupNavbar/SignupNavbar';
import Adminsignupform from './Admin Signup Form/Adminsignupform';


function Adminsignup() {
  return (
    <div>
        <SignupNavbar />
        <Adminsignupform />
    </div>
  )
}

export default Adminsignup