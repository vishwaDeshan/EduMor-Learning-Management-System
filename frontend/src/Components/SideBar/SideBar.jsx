import React from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Logo from "../../Assets/LogoC.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t } = useTranslation();
  return (
    <div className="side-bar">
      <div className="top">
        <div className="logo-details">
          <img className="logo-img" src={Logo} />
          <span className="logo-name">EduMor</span>
        </div>
      </div>
      <div className="center">
        <ul className="nav-links">
          <li >
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}><a href="/" >
              <DashboardCustomizeOutlinedIcon />
              <span className="link_name">{t("Overview")}</span>
            </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/examinations" className="">
              <a href="/examinations">
                <BookOutlinedIcon />
                <span className="link_name">{t("Examinations")}</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/myExams" className="">
              <a href="/myExams">
                <LibraryBooksOutlinedIcon />
                <span className="link_name">{t("My Exams")}</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/myPayments" className="">
              <a href="/myPayments">
                <LocalAtmOutlinedIcon />
                <span className="link_name">{t("Payments")}</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="">
              <a href="/profile">
                <SettingsOutlinedIcon />
                <span className="link_name">{t("Settings")}</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="">
              <a href="/logout" className="logout">
                <ExitToAppOutlinedIcon />
                <span className="link_name">{t("Logout")}</span>
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
