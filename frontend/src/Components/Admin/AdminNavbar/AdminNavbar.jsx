import React from 'react'
import './AdminNavbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Person3Icon from '@mui/icons-material/Person3';
function AdminNavbar() {
  return (
    <div className="navbar">
      <div className="navbaritem">
      <NotificationsActiveIcon/>
      <div className="navadmin">
        <div className="icon">
        <Person3Icon/>
        </div>
      
      <h4>Admin</h4>
      </div>
      
      </div>

    </div>
  )
}

export default AdminNavbar