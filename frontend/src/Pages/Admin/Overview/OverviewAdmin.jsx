import React from "react";
import Calender from "../../../Components/MiniCalander/MiniCalander";
import CardOverview from "../../../Components/Admin/CardOverview/CardOverview";
import CourseList from "../../../Components/Admin/CourseList/CourseList";
import Footer from "../../../Components/Footer/Footer";
import AdminNavbar from "../../../Components/Admin/AdminNavbar/AdminNavbar";
import AdminSideBar from "../../../Components/Admin/AdminSideBar/AdminSideBar"
import './OverviewAdmin.css'

function Overview() {
  return (
    <div style={{ diplay: "flex", flexDirection: "column" }}>
      <div className="overview" style={{ display: "flex", width:"100%"}}>
        < AdminSideBar/>
        <div className="mainContainer">
          <AdminNavbar />
          <h5>Overview</h5>

          <div className="overviewSections" style={{ display: "flex", minWidth:"100%" }}>

            <div className="middle-section" style={{ display: "flex",flexDirection: "column", width:"75%"}}>
              <CardOverview />
              <CourseList />
            </div>

            <div className="right-section" style={{ width:"15%" }}>
              <Calender />
            </div>

          </div>

        </div>

      </div>
      <div className="footer" style={{ diplay: "flex" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Overview;
