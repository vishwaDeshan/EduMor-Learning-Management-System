import React from "react";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Logo from "../../Assets/LogoC.png";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const SideBar = () => {
  const {t}=useTranslation();
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
          <li className="active">
            <a href="/">
              <DashboardCustomizeOutlinedIcon />
              <Link to="/"><span className="link_name">{t("Overview")}</span></Link>
            </a>
          </li>
          <li>
            <a href="/examinations">
              <BookOutlinedIcon />
              <Link to="/examinations"><span className="link_name">{t("Examinations")}</span></Link>
            </a>
          </li>
          <li>
            <a href="/myExams">
              <LibraryBooksOutlinedIcon />
              <Link to="/myExams"><span className="link_name">{t("My Exams")}</span></Link>
            </a>
          </li>
          <li>
            <a href="/myPayments">
              <LocalAtmOutlinedIcon />
              <Link to="/myPayments"><span className="link_name">{t("Payments")}</span></Link>
            </a>
          </li>
          <li>
            <a href="/profile">
              <SettingsOutlinedIcon />
              <Link to="/profile"><span className="link_name">{t("Settings")}</span></Link>
            </a>
          </li>
          <li>
            <a href="/logout" className="logout">
              <ExitToAppOutlinedIcon />
              <Link to="/logout"><span className="link_name">{t("Logout")}</span></Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
