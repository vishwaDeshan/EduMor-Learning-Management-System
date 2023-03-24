import React from 'react'
import './superAdminExaminationOverview.css'
import SASidebar from '../../../Components/SuperAdmin/SASidebar/SASidebar'
import SANavbar from '../../../Components/SuperAdmin/SANavbar/SANavbar'


export default function superAdminExaminationOverview() {
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
          <div className='SASrow3'>Views</div>
        </div>
      </div>
    </div>
  )
}