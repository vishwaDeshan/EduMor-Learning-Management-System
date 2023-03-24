import React from 'react'
import './AdminNavbar.css'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Avatar } from "@mui/material";
function AdminNavbar() {
  return (
    <div className="adminNavbar">
      <div className="navbaritem">
        <NotificationsActiveOutlinedIcon className='notficationIcon' />
          <Avatar
                src="https://img.freepik.com/premium-vector/user-icon_126283-435.jpg?w=2000"
                alt="Profile Picture"
                sx={{ width: 40, height: 40 }}
              />
          <span>Frank L.</span>
      </div>
    </div>
  )
}

export default AdminNavbar