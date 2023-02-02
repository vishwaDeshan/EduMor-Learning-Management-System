import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import "./ExamModule.css";
import AccordionExam from "../../Components/Accordion/Accordion";

function ExamModule() {
  const { t } = useTranslation();
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
              <MDBBreadcrumbItem>
                <a href="/myExams">{t("My Exams")}</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>{t("Sri Lanka Scientific Service Examination Grade III")}</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>
          <section className="exam-details">
            <h6 className="exam-name">Sri Lanka Scientific Service Examination Grade III</h6>
            <img
              src="https://img.freepik.com/free-vector/businessman-consulting-watch_74855-2350.jpg?w=2000"
              alt="sampleImage"
            />
            <p className="exam-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed earum eos, porro officia a fuga saepe animi quis,
              pariatur tenetur provident ab harum facere distinctio corporis
              voluptates sunt optio officiis alias mollitia? Unde, iste placeat
              beatae ad quam obcaecati enim eligendi eaque facere maiores
              laboriosam, consequatur sequi amet dolorum hic, explicabo
              excepturi corporis fuga dolorem incidunt! Praesentium atque earum
              unde odit mollitia nemo quod autem animi accusantium provident,
              deserunt eos molestias numquam, nobis iure aut delectus quas
              fugiat beatae veritatis nam nisi, quibusdam voluptate. Quo,
              adipisci sunt? Eaque quos accusantium beatae eius assumenda qui
              delectus itaque voluptate nisi.
            </p>
            <ul>
              <li>10 quizzes</li>
              <li>8 Lectures</li>
              <li>6 Past Papers</li>
            </ul>
            <AccordionExam/>
          </section>
        </div>
      </div>
      <div className="footer" style={{ diplay: "flex" }}>
        <Footer/>
      </div>
    </div>
  );
}

export default ExamModule;
