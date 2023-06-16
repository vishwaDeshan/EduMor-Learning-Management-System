import React ,{ useState }from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from 'mdb-react-ui-kit';
import AdminUserdetails from '../../../../Data/AdminUserdetails';
import DeleteIcon from '@mui/icons-material/Delete';
import defaultUser from "../../../../Assets/defaultUser.png"



export default function UserData() {

  const [data, setData] = useState([]);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr style={{ color: '#646a85' }}>
          <th scope='col' style={{color:'red',paddingLeft:'50px'}}>User Name</th>
          <th scope='col'style={{color:'red',paddingLeft:'50px'}}>Email</th>
          <th scope='col'style={{color:'red'}}>Status</th>
          <th scope='col'style={{color:'red'}}>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
<hr style={{color:'blue'}}/>
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
                
              {data.map((item, index) => (
  <div key={index}>
    <span>{item.name}</span>
    <DeleteIcon onClick={() => handleDelete(index)} />
  </div>
))}
              
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}