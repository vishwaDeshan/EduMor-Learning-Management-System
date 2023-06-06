import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SideBar from "../../Components/SideBar/SideBar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import withAuth from "../../hoc/withAuth";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ExamResult = () => {
  const navigate = useNavigate();
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

  const handleRetakeQuiz = (quizId) => {
    window.location.href = `http://localhost:3000/level/quiz/${quizId}`;
  };

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
                  <th scope="col" className=" align-items-center">
                    {t("Topic")}
                  </th>
                  <th scope="col" className="align-items-center">
                    {t("Marks(%)")}
                  </th>
                  <th scope="col" className="align-items-center">
                    {t("Attempted Date")}
                  </th>
                  <th scope="col" className="text-center align-items-center">
                    {t("Actions")}
                  </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {myResults.length === 0 ? (
                  <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>
                      You have not attempted quizzes
                    </td>
                  </tr>
                ) : (
                  myResults.map((myResults, index) => {
                    return (
                      <tr>
                        <td className="col-4">
                          <div className="d-flex align-items-center">
                            <div className="ms-1">{myResults.quizName}</div>
                          </div>
                        </td>
                        <td className="col-4 text-center">
                          <div className="d-flex align-items-center">
                            {myResults.percentage}
                          </div>
                        </td>
                        <td className="col-4 text-center">
                          <div className="d-flex align-items-center">
                            {new Date(myResults.updatedAt).toLocaleString(
                              "en-US",
                              {
                                month: "short",
                                day: "2-digit",
                              }
                            )}
                          </div>
                        </td>
                        <td className="col-4 text-center">
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => handleRetakeQuiz(myResults.quizId)}
                            >
                              Retake
                            </button>
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
