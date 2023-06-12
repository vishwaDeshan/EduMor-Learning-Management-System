
import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './CourseList.css'
import { color } from '@mui/system';

import { useState } from 'react';


export default function CourseList() {

  const [list,setList ] = useState([

    {
      imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcT8D-O3gn8DizvLc1oGpLWUIuvKvMdBpg&usqp=CAU",
      CourseName:"Sri Lanka Bank Examination",
   },
   {
    imglink:"https://img.freepik.com/premium-vector/man-with-laptop-studying-working-concept_113065-167.jpg?w=360",
    CourseName:"Sri Lanka Law Examination",
 },
 {
    imglink:"https://img.freepik.com/premium-vector/man-with-laptop-studying-working-concept_113065-167.jpg?w=360",
    CourseName:"Audit's Examiner Service Examination",
 },
 {
    imglink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bcT8D-O3gn8DizvLc1oGpLWUIuvKvMdBpg&usqp=CAU",
    CourseName:"Sri Lanka Foreign Service Examination",
 },
  ]);

 function removeList(index){

  const newList = [...list];
    newList.splice(index, 1);
    setList(newList);

  
 }


  return (
    
<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col mt-5'>Course Name</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {list.map((course, index) => (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center ms-5'>
                <img
                  src={course.imglink}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1 '>{course.CourseName}</p>
                </div>
              </div>
            </td>
            <td>
              <button
               
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'black',
                  margin: '1px',
                  padding:'5px',
                  color: 'white',
                  transition: 'background-color 0.5s, color 0.3s'
                }}

                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'black';
                  e.target.style.color = 'white';
                }}
                
                onClick={() => removeList(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}






