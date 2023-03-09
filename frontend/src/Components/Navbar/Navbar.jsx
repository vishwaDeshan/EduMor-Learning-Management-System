import "./Navbar.css";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar } from "@mui/material";
import ProfilePic from "../../Assets/defaultUser.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18next";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
} from "mdb-react-ui-kit";

const Navbar = ({user}) => {
  const [scrollableModal, setScrollableModal] = useState(false);
  const { t, i18n } = useTranslation();
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div className="Navbar">
      <div className="wrapper-nav">
        <div className="search">
          <SearchOutlinedIcon className="search-icon" />
          <input type="text" placeholder={t("Search")} />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="nav-icon" />
            <select
              className="custome-select"
              value={i18n.language}
              onChange={(e) => handleChangeLng(e.target.value)}
            >
              <option value="en" className="options">
                English
              </option>
              <option value="si" className="options">
                සිංහල
              </option>
            </select>
          </div>
          <div
            className="item"
            onClick={() => setScrollableModal(!scrollableModal)}
          >
            <NotificationsActiveOutlinedIcon className="nav-icon" />
            <div className="counter">1</div>
            {/* message */}
            <MDBModal
              show={scrollableModal}
              setShow={setScrollableModal}
              tabIndex="-1"
            >
              <MDBModalDialog scrollable>
                <MDBModalContent>
                  <MDBModalHeader>
                    {t("Notifications")}
                    <NotificationsActiveIcon className="msg-icon" />
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={() => setScrollableModal(!scrollableModal)}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <p>
                      {t("You have no notifications")}
                    </p>
                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
          <div className="item">
            <Link to="/profile">
              <Avatar
                alt="Profile"
                src={ProfilePic}
                sx={{ width: 38, height: 38 }}
              />
            </Link>
            <font>Anna Sophia</font>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
