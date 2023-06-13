import React, { useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './CourseList.css'
import { useState } from 'react';
import axios from 'axios';



export default function CourseList() {


  const [exams,setExams]=useState([]);
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/examinations")
      .then((res) => {
        setExams(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);


  return (
    
<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col mt-6'>Course Name</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        {exams.map((course, index) => (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center ms-5'>
                <img
                  src={course.photo}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1 '>{course.examName}</p>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}






