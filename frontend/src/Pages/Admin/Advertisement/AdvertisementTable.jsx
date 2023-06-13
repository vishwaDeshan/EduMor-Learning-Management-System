import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';
import Adminadvertisementdata from '../../../Data/Adminadvertisementdata';
import axios from 'axios';

export default function AdvertisementTable() {


  const [allAdvertisement, setAllAdvertisement] = useState([]);
  const [list, setList] = useState([]);
  

   useEffect(() => {
    axios
      .get('http://localhost:8000/advertisements')
      .then((response) => {
        setAllAdvertisement(response.data.existingAds);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  console.log(allAdvertisement);

   
   function deleteAdvertisement(id){
    axios
      .delete(`http://localhost:8000/advertisements/delete/${id}`)
      .then((response) => {
        console.log('Advetisementdeleted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting advertisement:', error);
      });
  };

  return (
    <div className="NewsForm" style={{width:'100%',background:"#fff", overflowY:'scroll', height:'400px', padding:'25px', borderRadius:'10px',marginLeft:'20px',maxHeight:"380px"}}>
    <MDBTable align='middle'style={{ overflowY: 'auto', height: '40px', tableLayout: 'fixed' }}>
      <MDBTableHead>
        <tr style={{ color: '#646a85' }}>
          <th scope='col' style={{ color: 'red', paddingLeft: '50px' }}>Advertisement</th>
          <th scope='col' style={{ color: 'red', paddingLeft: '100px' }}>Link</th>
          <th scope='col' style={{ color: 'red', paddingLeft: '260px' }}>Action</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>
        {allAdvertisement.map((allAdvertisement, index) => {
          return (
            <tr key={index}>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='ms-3'>
                    <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{allAdvertisement.addTitle}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer',overflowX:'hidden',maxHeight:"30px", overflowY:"hidden" }}>{allAdvertisement.link}</p>
              </td>

              <td>
            
              <button  onClick={()=>deleteAdvertisement(allAdvertisement._id)}
                style={{
                  alignSelf: 'center',
                   color: 'white',
                  backgroundColor: 'blue',
                  padding:'5px',
                  marginLeft:'250px',
                  transition: 'background-color 0.3s, color 0.3s',
                  borderRadius:"10px",
                  padding:"2px 10px"
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
  
    </div>
  );
}
