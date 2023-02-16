import React from 'react'
import SASidebar from '../../../Components/SuperAdmin/SASidebar/SASidebar'
import SANavbar from '../../../Components/SuperAdmin/SANavbar/SANavbar'
import './AdminRequests.css'
import Footer from '../../../Components/Footer/Footer'

function AdminRequests() {
  return (
    <div style={{ diplay: "flex", flexDirection: "column" }}>
    <div className="overview" style={{ display: "flex" }}>
      <SASidebar />
      <div className="mainContainer">
        <SANavbar />
        <div className="overview-container" style={{ display: "flex" }}>
          
        </div>
      </div>
    </div>
    <div className="footer" style={{ diplay: "flex" }}>
      <Footer />
    </div>
  </div>
  )
}

export default AdminRequests