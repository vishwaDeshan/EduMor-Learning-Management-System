import React from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Logo from "../../../Assets/LogoC.png";
import "./SASidebar.css";
import { NavLink } from "react-router-dom";


const SASidebar = () => {
  
  return (
    <div className="side-bar-sa">
      <div className="top">
        <div className="logo-details">
          <img className="logo-img" src={Logo} />
          <span className="logo-name">EduMor</span>
        </div>
      </div>
      <div className="center">
        <ul className="nav-links">
          <li >
            <NavLink to="/superAdminDashboard" className={({ isActive }) => (isActive ? "active" : "")}><a>
              <DashboardOutlinedIcon />
              <span className="link_name">Overview</span>
            </a>
            </NavLink>
          </li>
           <li >
            <NavLink to="/adminRequests" className={({ isActive }) => (isActive ? "active" : "")}><a>
              <GroupAddOutlinedIcon />
              <span className="link_name">Admin Requests</span>
            </a>
            </NavLink>
          </li>
          <li >
            <NavLink to="/superadminSettings" className={({ isActive }) => (isActive ? "active" : "")}><a>
              <SettingsOutlinedIcon />
              <span className="link_name">Settings</span>
            </a>
            </NavLink>
          </li>
          <li >
            <NavLink to="/logout" className={({ isActive }) => (isActive ? "active" : "")}><a>
              <ExitToAppOutlinedIcon />
              <span className="link_name">Logout</span>
            </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SASidebar;
