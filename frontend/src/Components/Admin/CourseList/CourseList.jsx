
import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './CourseList.css'
import { color } from '@mui/system';

export default function CourseList() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Course Name</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcT8D-O3gn8DizvLc1oGpLWUIuvKvMdBpg&usqp=CAU'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Sri Lanka Bank Examination</p>
                
              </div>
            </div>
          </td>
         
         
          <td>
          <MDBBtn 
  color='link' 
  rounded 
  size='sm' 
  style={{ 
    textDecoration: 'none', 
    backgroundColor: 'black', 
    margin: '10px' ,
    color:'white'
  }} 
>
  Edit
</MDBBtn>

          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://img.freepik.com/premium-vector/man-with-laptop-studying-working-concept_113065-167.jpg?w=360'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Sri Lanka Law College Examination</p>
                
              </div>
            </div>
          </td>
         
          <td>
         



<MDBBtn  color='link' 
  rounded 
  size='sm' 
  style={{ 
    textDecoration: 'none', 
    backgroundColor: 'black', 
    margin: '10px' ,
    color:'white'
  }} >
              Edit
            </MDBBtn>



          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://img.freepik.com/premium-vector/man-with-laptop-studying-working-concept_113065-167.jpg?w=360'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Audit's Examiner Service Examination</p>
                
              </div>
            </div>
          </td>
          
          <td>
            <MDBBtn  color='link' 
  rounded 
  size='sm' 
  style={{ 
    textDecoration: 'none', 
    backgroundColor: 'black', 
    margin: '10px' ,
    color:'white'
  }} >
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcT8D-O3gn8DizvLc1oGpLWUIuvKvMdBpg&usqp=CAU'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Sri Lanka Foreign Service Examination</p>
                
              </div>
            </div>
          </td>
          <td>
            <MDBBtn  color='link' 
  rounded 
  size='sm' 
  style={{ 
    textDecoration: 'none', 
    backgroundColor: 'black', 
    margin: '10px' ,
    color:'white'
  }} >
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}