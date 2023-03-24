import React from 'react'
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import Person3Icon from '@mui/icons-material/Person3';
import QuizSharpIcon from '@mui/icons-material/QuizSharp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddCardIcon from '@mui/icons-material/AddCard';
import FeedIcon from '@mui/icons-material/Feed';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import './AdminSideBar.css';
import LogoC from "../../../Assets/LogoC.png";
import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';

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
      <NavLink to="/adminOverview" className="">
              <a href="/adminOverview">
              <DashboardCustomizeOutlinedIcon/>
      <span className='x'>Overview</span>
      
      </a>
      </NavLink>
      </div>
     
      
    </div>
    <div className="menuItem">
      <div>
      <NavLink to="/userDetails" className="">
              <a href="/userDetails">
              <Person3Icon/>
              <span className='x'>Users</span>
      </a>
      </NavLink>
      </div>
      
    </div>
    <div className="menuItem">
      <div>
      <NavLink to="/quizeUpload" className="">
              <a href="/quizeUpload">
      <MenuBookIcon/>
      <span className='x'>Quizzes</span>
      </a>
      </NavLink>
      </div>
      
     

    </div>
    <div className="menuItem">
      <div>
      <NavLink to="/addUpload" className="">
              <a href="/addUpload">
              <AddCardIcon/>
      <span className='x'>Advertise</span>
      
      </a>
      </NavLink>
      </div>
     
      
    </div>
    <div className="menuItem">
      <div>
      <NavLink to="/newsUpload" className="">
              <a href="/newsUpload">
      <FeedIcon/>
      <span className='x'>News</span>
      </a>
      </NavLink>
      </div>
      
      
      
    </div>
    <div className="menuItem">
      <div>
      <NavLink to="/newsUpload" className="">
              <a href="/newsUpload">
      <MonetizationOnIcon/>
      <span className='x'>Payments</span>
      </a>
     
      </NavLink>
      </div>
      
    </div>
    <div className="menuItem">
      <div>
          
        <NavLink to='/videoUpload'>
          <a href='/videoUpload'>
          <PlayCircleFilledIcon/>
          <span className='x'>Vedios</span>
          </a>
        </NavLink>
      
      </div>
     
    </div>
    <div className="menuItem">
      <div>
      <NavLink to='/'>
          <a href='/'>
      <DashboardCustomizeOutlinedIcon/>
      <span className='x'>Settings</span>
      </a>
        </NavLink>
      </div>
      
      
        </div>
    
    <div className="menuItem">
      <div>
      <DashboardCustomizeOutlinedIcon/>
      </div>
      <span className='x'>Logout</span>
    </div>
  </div>

</div>
  );
};

export default Sidebar