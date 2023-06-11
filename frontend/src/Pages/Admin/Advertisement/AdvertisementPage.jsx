import React from "react";
import AdminNavbar from "../../../Components/Admin/AdminNavbar/AdminNavbar";
import MiniCalander from "../../../Components/MiniCalander/MiniCalander";

import AdminSideBar from "../../../Components/Admin/AdminSideBar/AdminSideBar"
import Footer from "../../../Components/Footer/Footer";

import Advertisement from "./Advertisement";


function AdvertisementPage() {
  return (
    <div style={{ diplay: "flex", flexDirection: "column" }}>
      <div className="overview" style={{ display: "flex", width:"100%"}}>
        < AdminSideBar/>
        <div className="mainContainer">
          <AdminNavbar />
          <h5>Advertisement  Upload </h5>

          <div className="overviewSections" style={{ display: "flex", minWidth:"100%" }}>

            <div className="middle-section" style={{ display: "flex",flexDirection: "column", width:"75%"}}>
              <Advertisement/>
            </div>

            <div className="right-section" style={{ width:"15%" }}>
              <MiniCalander />
            </div>

          </div>

        </div>

      </div>
      <div className="footer" style={{ diplay: "flex" }}>
        <Footer/>
      </div>
    </div>
  );
}

export default AdvertisementPage;