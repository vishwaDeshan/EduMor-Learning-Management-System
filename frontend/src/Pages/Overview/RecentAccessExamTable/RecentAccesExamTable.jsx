import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';
import RecentExam from '../../../Data/RecentExams'
import { useTranslation } from 'react-i18next';


export default function App() {
  const { t } = useTranslation();
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr style={{ color: '#646a85' }}>
          <th scope='col' >{t("Title")}</th>
          <th scope='col'>{t("Status")}</th>
          <th scope='col'>{t("Started")}</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >

        {RecentExam.map(({ examTitle, image, Started, level }, index) => {
          return (
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={image}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1' style={{ color: '#041083', cursor: 'pointer' }}>{examTitle}</p>
                  </div>
                </div>
              </td>
              <td style={{margin:"auto"}}>
                <MDBBadge color={level === 'Beginner' ? 'success' : level === 'Intermediate' ? 'primary' : 'warning'} pill>
                  {level}
                </MDBBadge>
              </td>
              <td>
                <p rounded size='sm'>
                  {Started}
                </p>
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}