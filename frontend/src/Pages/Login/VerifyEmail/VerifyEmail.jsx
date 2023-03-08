import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Button from '../../../Components/Buttons/Button'
import UserNavbar from '../../../Components/UserNavbar/UserNavbar'
import './VerifyEmail.css'

function VerifyEmail() {

    const token = useLocation().search.slice(0, useLocation().search.length).split("=").pop();
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState();

    if (!token) {
        return (
            <p>Token is not present</p>
        )
    }
    return (
        <div>
            <UserNavbar />
            <div className="verify-email-container" style={{ display: "flex" }}>
                {
                    verified && !error ? "You are verified" : error ? error : "Verifying Please Wait"
                }
            </div>
        </div>
    )
}

export default VerifyEmail