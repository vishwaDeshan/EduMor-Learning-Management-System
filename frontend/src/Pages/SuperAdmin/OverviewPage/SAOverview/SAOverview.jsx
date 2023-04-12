import React from 'react'
import './SAOverview.css'
import CardMembershipIcon from '@mui/icons-material/CardMembership';

function SAOverview() {
  return (
    <div className='SAOverview-secton'>
        <div className='left-container'>
            <div className='colmn1'>
                     <div className='adminsbox overviewbox'>
                     <div className='overviewName'>Admins</div>
                     <div className='overviewIcon'><CardMembershipIcon/></div>
                </div>
                <div className='studentsbox overviewbox'>
                <div className='overviewName'>Students</div>
                    <div className='overviewIcon'><CardMembershipIcon/></div>
                </div>
            </div>
            <div className='colmn2'>
                <div className='videoBox overviewbox'>
                <div className='overviewName'>Video Modules</div>
                    <div className='overviewIcon'><CardMembershipIcon/></div>
                </div>
                <div className='quizbox overviewbox'>
                <div className='overviewName'>Quizzes</div>
                    <div className='overviewIcon'><CardMembershipIcon/></div>
                </div>
            </div>
            <div className='colmn3 '>
                <div className='overviewName'>examination modules                </div>
                <div className='overviewIcon'><CardMembershipIcon/></div>
                
            </div>
        </div>
        <div className='right-container'>
            <div className='msgBox'>unread massages</div>
                    
            <div className='msgboxicn'><CardMembershipIcon/></div>
        </div>
    </div>            

  )
}

export default SAOverview