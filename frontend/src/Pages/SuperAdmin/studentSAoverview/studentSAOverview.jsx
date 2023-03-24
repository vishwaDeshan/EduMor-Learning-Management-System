import React from 'react'
import './studentSAOverview.css'
import SASidebar from '../../../Components/SuperAdmin/SASidebar/SASidebar'
import SANavbar from '../../../Components/SuperAdmin/SANavbar/SANavbar'


export default function StudentSAOverview() {
  return (
    <div className='studentSAoverviwemain'>
      <div className='SAadminsidebar'>
        <SASidebar /> </div>
      <div className='studentSAoverviweright'>
        <div className='SAadminnavbar'>
          <SANavbar /></div>
        <div className='cSACS'>
          <div className='SASrow1'>Name</div>
          <div className='SASrow2'>Enrollments</div>
          <div className='SASrow3'>views</div>
        </div>
      </div>
    </div>
















  )
}
