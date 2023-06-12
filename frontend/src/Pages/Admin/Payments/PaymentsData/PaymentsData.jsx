import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from 'mdb-react-ui-kit';
import Adminpaymentsdata from "../../../../Data/Adminpaymentsdata";
import defaultUser from "../../../../Assets/defaultUser.png";


export default function PaymentsData() {
  const [list,setList ] = useState([

    {
      CardholderName :"Srhehan Perera",
   },
   {
    CardholderName :"Thilak  Varma",
 },
 {
  CardholderName :"Sadesh  Bandara", 
 },
    
  ]);

  function removeList(index){

    const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
  
    
   }
  
  
  return (
    <MDBTable align='middle' style={{marginLeft:'100px',marginTop:'20px'}}>
      <MDBTableHead>
        <tr style={{ color: '#646a85' }}>
          <th scope='col'style={{color:'red'}} >Card Holder Name</th>
          
         
        </tr>
      </MDBTableHead>
      <MDBTableBody >

        {list.map(({CardholderName }, index) => {
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
                    <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{CardholderName}</p>
                  </div>
                </div>
              </td>
             
              <td>
            
                <button  onClick={()=>removeList(index)}
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  backgroundColor: 'blue',
                  padding:'5px',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseEnter={(e) => { 
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => { 
                  e.target.style.backgroundColor = 'blue';
                  e.target.style.color = 'white';
                }}
                
                
                
                >Delete
                
                
                
                
                </button>
              </td>
             
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}