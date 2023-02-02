import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {MDBBreadcrumb,MDBBreadcrumbItem} from 'mdb-react-ui-kit';
import myExams from "../../Data/MyExams";
import ProgressBarComponent from "../../Components/ProgessBarComponent/ProgressBarComponent";
import './MyExams.css'


function MyExams() {
  const { t } = useTranslation();
  return (
    <div style={{ diplay: "flex", flexDirection: "column" }}>
      <div className="middle-contaier" style={{ display: "flex" }}>
        <SideBar />
        <div className="mainContainer">
          <Navbar />
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
                  <th scope="col">{t("Progress")}</th>
                  <th scope="col">{t("Started")}</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {myExams.map(
                  ({ examTitle, image, date, progress }, index) => {
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
                          <ProgressBarComponent percentage={progress} />
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
