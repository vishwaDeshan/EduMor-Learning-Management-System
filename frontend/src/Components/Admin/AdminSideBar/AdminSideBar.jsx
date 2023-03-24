import React from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import FeaturedVideoOutlinedIcon from "@mui/icons-material/FeaturedVideoOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./AdminSideBar.css";
import LogoC from "../../../Assets/LogoC.png";

const Sidebar = () => {
  return (
    <div className="SidebarAdmin">
      <div className="Logo">
        <img src={LogoC} alt="logo" />
        <span>EduMor</span>
      </div>

      <div className="menu">
        <div className="menuItem">
          <div>
            <DashboardCustomizeOutlinedIcon />
          </div>
          <span>Overview</span>
        </div>
        <div className="menuItem">
          <div>
            <GroupOutlinedIcon />
          </div>
          <span>Users</span>
        </div>
        <div className="menuItem">
          <div>
            <CollectionsBookmarkOutlinedIcon />
          </div>
          <span>Quizzes</span>
        </div>
        <div className="menuItem">
          <div>
            <FeaturedVideoOutlinedIcon />
          </div>
          <span>Advertisements</span>
        </div>
        <div className="menuItem">
          <div>
            <PaidOutlinedIcon />
          </div>
          <span>Payments</span>
        </div>
        <div className="menuItem">
          <div>
            <DashboardCustomizeOutlinedIcon />
          </div>
          <span>Lecture Videos</span>
        </div>
        <div className="menuItem">
          <div>
            <SettingsOutlinedIcon />
          </div>
          <span>Settings</span>
        </div>
        <div className="menuItem">
          <div>
            <LogoutOutlinedIcon />
          </div>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
