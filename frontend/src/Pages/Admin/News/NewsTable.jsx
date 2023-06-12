// import React, { useEffect,useState } from 'react';
// import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from 'mdb-react-ui-kit';
// import Adminnewsdata from "../../../Data/Adminnewsdata";

// import axios from 'axios';

// export default function NewsTable() {
//   const [allNews, setAllNews] = useState([]);
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/news')
//       .then((response) => {
//         setAllNews(response.data.existingNews);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   }, []);
//   console.log(allNews);

//   function removeList(index){

//     const newList = [...list];
//       newList.splice(index, 1);
//       setList(newList);
  
    
//    }

  
//   return (

// <div className="NewsForm" style={{width:'100%',background:"#fff", overflowY:'scroll', height:'400px', padding:'25px', borderRadius:'10px',marginLeft:'20px'}}>
//   <MDBTable align='middle' style={{ overflowY: 'auto', height: '40px', tableLayout: 'fixed' }}>
//     <MDBTableHead>
//       <tr style={{ color: '#646a85' }}>
//         <th scope='col' style={{ color: 'red', width: '40%', paddingLeft: '80px' }}>News</th>
//         <th scope='col' style={{ color: 'red', width: '60%', paddingLeft: '100px' }}>Link</th>
//       </tr>
//     </MDBTableHead>

//     <MDBTableBody>
//       {allNews.map((allNews, index) => {
//         return (
//           <tr key={index}>
//             <td>
//               <div className='d-flex align-items-center'>
//                 <div className='ms-3'>
//                   <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{allNews.news}</p>
//                 </div>
//               </div>
//             </td>
//             <td>
//               <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer',overflowX:"hidden" }}>{allNews.link}</p>
//             </td>

//             <td>
            
//             <button  onClick={()=>removeList(index)}
//                 style={{
//                   alignSelf: 'center',
//                    color: 'white',
//                   backgroundColor: 'blue',
//                   padding:'5px',
//                   transition: 'background-color 0.3s, color 0.3s',
//                 }}
//                 onMouseEnter={(e) => { 
//                   e.target.style.backgroundColor = 'white';
//                   e.target.style.color = 'black';
//                 }}
//                 onMouseLeave={(e) => { 
//                   e.target.style.backgroundColor = 'blue';
//                   e.target.style.color = 'white';
//                 }}
                
                
                
//                 >Delete
                
                
                
                
//                 </button>
//               </td>
//           </tr>
//         );
//       })}
//     </MDBTableBody>
//   </MDBTable>
// </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';
import Adminnewsdata from "../../../Data/Adminnewsdata";

import axios from 'axios';

export default function NewsTable() {
  const [allNews, setAllNews] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/news')
      .then((response) => {
        setAllNews(response.data.existingNews);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  
console.log(allNews);

  function deleteNews(id){
    axios
      .delete(`http://localhost:8000/news/delete/${id}`)
      .then((response) => {
        console.log('News deleted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error deleting news:', error);
      });
  };
  return (
    <div
      className="NewsForm"
      style={{
        width: '100%',
        background: '#fff',
        overflowY: 'scroll',
        height: '400px',
        padding: '25px',
        borderRadius: '10px',
        marginLeft: '20px',
      }}
    >
      <MDBTable align='middle' style={{ overflowY: 'auto', height: '40px', tableLayout: 'fixed' }}>
        <MDBTableHead>
          <tr style={{ color: '#646a85' }}>
            <th scope='col' style={{ color: 'red', width: '40%', paddingLeft: '80px' }}>News</th>
            <th scope='col' style={{ color: 'red', width: '60%', paddingLeft: '100px' }}>Link</th>
          </tr>
        </MDBTableHead>

        <MDBTableBody>
          {allNews.map((news, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='ms-3'>
                      <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{news.news}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer', overflowX: "hidden" }}>{news.link}</p>
                </td>

                <td>
                  <button
                    onClick={() => deleteNews(news._id)}
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      backgroundColor: 'blue',
                      padding: '5px',
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
                  >
                    Delete
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
