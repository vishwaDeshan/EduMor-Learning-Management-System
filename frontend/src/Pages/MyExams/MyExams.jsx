import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBadge } from "mdb-react-ui-kit";
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import myExams from "../../Data/MyExams";
import './MyExams.css';
import axios from "axios";


function MyExams({ isLoggedIn, user }) {
  const { t } = useTranslation();

  //   const token = localStorage.getItem("AUTH_TOKEN");
  //   const userId = user._id;


  // useEffect(() => {
    
  //   if (!token) {
  //     alert("Authorization token missing");
  //     return;
  //   }
    
  //   axios
  //     .get(`http://localhost:8000/enrollment/${userId}`, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //     .then((res) => {
  //      console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.message);
  //     });
  // }, []);

  return (
    <div style={{ diplay: "flex", flexDirection: "column" }}>
      <div className="middle-contaier" style={{ display: "flex" }}>
        <SideBar />
        <div className="mainContainer">
          <Navbar isLoggedIn={isLoggedIn} user={user} />
          <div className="read-crumb">
            <MDBBreadcrumb >
              <MDBBreadcrumbItem>
                <a href='/'>{t("Overview")}</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>{t("My Exams")}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
          <h5>{t("My Exams")}</h5>
          <section className="exam-table">
            <MDBTable align="middle">
              <MDBTableHead>
                <tr style={{ color: "#646a85" }}>
                  <th scope="col">{t("Title")}</th>
                  <th scope="col">{t("Level")}</th>
                  <th scope="col">{t("Started")}</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {myExams.map(
                  ({ examTitle, image, date, level }, index) => {
                    return (
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={image}
                              alt=""
                              style={{ width: "45px", height: "45px" }}
                              className="rounded-circle"
                            />
                            <div className="ms-3">
                              <p
                                className="fw-bold mb-1"
                                style={{ color: "#041083", cursor: "pointer" }}
                              >
                                {examTitle}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <MDBBadge color={level === 'Beginner' ? 'success' : level === 'Intermediate' ? 'primary' : 'warning'} pill>
                            {level}
                          </MDBBadge>
                        </td>

                        <td>
                          <p rounded size="sm">
                            {date}
                          </p>
                        </td>
                      </tr>
                    );
                  }
                )}
              </MDBTableBody>
            </MDBTable>
          </section>
        </div>
      </div>
      <div className="footer" style={{ diplay: "flex" }}>
        <Footer />
      </div>
    </div>
  );
}

export default MyExams;
