import React ,{ useEffect, useState }from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from 'mdb-react-ui-kit';
import AdminUserdetails from '../../../../Data/AdminUserdetails';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultUser from "../../../../Assets/defaultUser.png"
import axios from 'axios';



export default function UserData() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/news')
      .then((response) => {
        setUserData(response.data.existingUserData);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  console.log(UserData);

  function removeList(index){

    const newList = [...userData];
      newList.splice(index, 1);
      setUserData(newList);
  
    
   }
  return (

<MDBTable align='middle'>
  <MDBTableHead>
    <tr style={{ color: '#646a85' }}>
      <th scope='col' style={{ color: 'red', paddingLeft: '50px' }}>User Name</th>
      <th scope='col' style={{ color: 'red', paddingLeft: '50px' }}>Email</th>
      <th scope='col' style={{ color: 'red' }}>Delete</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <hr style={{ color: 'blue' }} />

    {userData.map((userData, index) => {
      return (
        <tr key={index}>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={defaultUser}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{userData.firstName}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{userData.email}</p>
          </td>
          <td>
            <button style={{ backgroundColor: 'blue', color: 'wheat', fontWeight: 'bolder', padding: '10px'}} onClick={() => removeList(index)}>Delete</button>
          </td>
        </tr>
      );
    })}
  </MDBTableBody>
</MDBTable>
  );
}