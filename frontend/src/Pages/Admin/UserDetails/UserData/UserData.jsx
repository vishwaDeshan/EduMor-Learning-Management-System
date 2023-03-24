import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from 'mdb-react-ui-kit';
import AdminUserdetails from '../../../../Data/AdminUserdetails';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultUser from "../../../../Assets/defaultUser.png"

export default function UserData() {
  
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr style={{ color: '#646a85' }}>
          <th scope='col' >User Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >

        {AdminUserdetails.map(({ UserName, Useremail, UserStatus }, index) => {
          return (
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={defaultUser}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{UserName}</p>
                  </div>
                </div>
              </td>
              <td>
              <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{Useremail}</p>
              </td>

              <td>
                <MDBBadge color='primary' pill>
                {UserStatus}
                </MDBBadge>
              </td>
              <td>
                <p rounded size='sm'>
                  <DeleteIcon/>
                </p>
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}