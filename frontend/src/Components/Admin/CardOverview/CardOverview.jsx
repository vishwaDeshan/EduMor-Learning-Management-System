import React, { useEffect, useState } from 'react'
import "./CardOverview.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';


function CardOverview() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/enrollment/:userId')
      .then((response) => {
        setAllUsers(response.data.existingUsers);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  console.log(allUsers);

  // {allUsers.map((allUsers, index) => {
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
// })}
}


export default CardOverview