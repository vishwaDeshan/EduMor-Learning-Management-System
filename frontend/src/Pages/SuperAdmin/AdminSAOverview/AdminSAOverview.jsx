import React from 'react'
import './AdminSAOverview.css'
import SASidebar from '../../../Components/SuperAdmin/SASidebar/SASidebar'
import SANavbar from '../../../Components/SuperAdmin/SANavbar/SANavbar'


export default function AdminSAOverview() {
  return (
    <div className='AdminSAoverviewmain'>
      <div className='SAadminsidebar'>
        <SASidebar />
      </div>
      <div className='AdminSAoverviweright'>
        <div className='SAadminnavbar'>
          <SANavbar />
        </div>
        <div className='cSAC'>
          <div className='SAArow1'>Name</div>
          <div className='SAArow2'>Type</div>
          <div className='SAArow3'>Status</div>
          <div className='SAArow4'>Action</div>
        </div>
      </div>
    </div>
















  )
}
