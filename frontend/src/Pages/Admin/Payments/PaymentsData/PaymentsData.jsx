import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from 'mdb-react-ui-kit';
import Adminpaymentsdata from "../../../../Data/Adminpaymentsdata";
import defaultUser from "../../../../Assets/defaultUser.png"

export default function PaymentsData() {
  
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr style={{ color: '#646a85' }}>
          <th scope='col' >Card Type</th>
          <th scope='col'>Card Number</th>
          <th scope='col'>Card Holder Name</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >

        {Adminpaymentsdata.map(({CardType,CardNumber,CardholderName }, index) => {
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
                    <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{CardType}</p>
                  </div>
                </div>
              </td>
              <td>
              <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{CardNumber}</p>
              </td>

              <td>
                <MDBBadge color='primary' pill>
                {CardholderName}
                </MDBBadge>
              </td>
             
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}