import "./SANavbar.css";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import SuperAdmin from "../../../Assets/SuperAdmin.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [scrollableModal, setScrollableModal] = useState(false);

    return (
        <div className="Navbar-sa">
            <div className="wrapper-sa">
                <div className="items">
                    <Link to="/">
                            <button className="btn btn-outline-primary">
                                View Website
                            </button>
                    </Link>
                    <div className="item">
                        <Link to="/profile-superAdmin">
                            <Avatar
                                alt="Profile"
                                src={SuperAdmin}
                                sx={{ width: 38, height: 38 }}
                            />
                        </Link>
                        <font>Adam Logan</font>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
