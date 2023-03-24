import React from 'react'
import './AdminSAOverview.css'
import SASidebar from '../../../Components/SuperAdmin/SASidebar/SASidebar'
import SANavbar from '../../../Components/SuperAdmin/SANavbar/SANavbar'


export default function AdminSAOverview() {
  return (
    <div className='AdminSAoverviwemain'>
      <div className='SAadminsidebar'>
      <SASidebar/> </div>

      <div className='AdminSAoverviweright'>
        
        <div className='SAadminnavbar'>
        <SANavbar/></div>

        <div className='cSAC'>

          <div className='SAArow1'>NAME</div>
          <div className='SAArow2'>TYPE</div>
          <div className='SAArow3'>STATUS</div>
          <div className='SAArow4'>ACTION</div>


        </div>

        
      
        </div>


        
        
        
        
        
        </div> 
      
        
    





    
    

  



    
  )
}
