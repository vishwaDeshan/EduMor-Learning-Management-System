import React from 'react'
import "./CardOverview.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LoginIcon from '@mui/icons-material/Login';
function CardOverview() {
    
  return (
    <div className="featured">

      <div className="featuredItem">
        <div className="icon">
        <ManageAccountsIcon/>
      </div>
        <span className="featuredTitle">Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100</span>
        </div>
      </div>

      <div className="featuredItem">
      <div className="icon">
        <AutoStoriesIcon/>
      </div>
        <span className="featuredTitle">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">6</span> 
        </div>  
      </div>

      <div className="featuredItem">
      <div className="icon">
        <LoginIcon/>
      </div>
        <span className="featuredTitle">Logins</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">60</span>
        </div>  
      </div>
    </div>
);
}
  


export default CardOverview