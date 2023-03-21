import React from 'react'
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import './AdminSideBar.css';
import LogoC from "../../../Assets/LogoC.png";

const Sidebar =() =>{
  return(
<div className="Sidebar">

  <div className="Logo">
    <img src={LogoC} alt="logo" />
    <span>
      EduMor
    </span>
  </div>

  <div className="menu">
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Overview</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Users</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Quizzes</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Advertisements</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Payments</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Vedios</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Settings</span>
    </div>
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span>Logout</span>
    </div>
  </div>

</div>
  );
};

export default Sidebar