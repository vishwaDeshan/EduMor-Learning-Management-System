import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SideBar from "../../Components/SideBar/SideBar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import withAuth from "../../hoc/withAuth";
import { useParams } from "react-router-dom";
import axios from "axios";

const ExamResult = () => {
  const { t } = useTranslation();
  const [myResults, setMyResults] = useState([]);
  const [examAttempted, setExamAttempted] = useState([]);
  const { userId, examId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (!token) {
      alert("Authorization token missing");
      return;
    }

    //to get details of quizzes which have already attempted
    axios
      .get(`/quizResults/${userId}/${examId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyResults(response.data.results);
        const examinationIds = response.data.results.map(
          (result) => result.examinationId
        );

        // to get examination details
        axios
          .get(`/examinations/${examId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setExamAttempted(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [userId, examId]);

  return (
    <div style={{ diplay: "flex", flexDirection: "column" }}>
      <div className="middle-contaier" style={{ display: "flex" }}>
        <SideBar />
        <div className="mainContainer">
          <Navbar />
          <div className="read-crumb">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <a href="/">{t("Overview")}</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>{t("Quiz Results")}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
          <h5>{t("Quiz Results")}</h5>
          <section className="exam-table">
            <MDBTable align="middle">
              <MDBTableHead>
                <tr style={{ color: "#646a85" }}>
                  <th scope="col">{t("Topic")}</th>
                  <th scope="col">{t("Level")}</th>
                  <th scope="col">{t("Marks(%)")}</th>
                  <th scope="col">{t("Attempted Date")}</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {myResults.length === 0 ? (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                      You have not enrolled in any examination yet
                    </td>
                  </tr>
                ) : (
                  myResults.map((myResults, index) => {
                    return (
                      <tr>
                        <td className="col-3">
                          <div className="d-flex align-items-center">
                            <div className="ms-1">{myResults.quizName}</div>
                          </div>
                        </td>
                        <td className="col-3">
                          <div className="d-flex align-items-center">
                            {/* Content for Column 2 */}
                          </div>
                        </td>
                        <td className="col-2">
                          <div className="d-flex align-items-center">
                            {myResults.percentage}
                          </div>
                        </td>
                        <td className="col-2">
                          <div className="d-flex align-items-center">
                            {new Date(myResults.updatedAt).toLocaleString("en-US", {
                              month: "short",
                              day: "2-digit",
                            })}
                          </div>
                        </td>
                      </tr>
                    );
                  })
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
};

export default withAuth(ExamResult);
