import React, { useState } from "react";
import ExamCard from "../../../Components/ExamCard/ExamCards"
import "./ExaminationCardsSection.css";
import examinationData from "../../../Data/ExaminationsData"
import Pagination from '../Pagination/Pagination'

function ExaminationSection() {
  const [exams, setExams] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = examinationData.slice(firstPostIndex, lastPostIndex);

  const pageCount = Math.ceil(currentPosts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setcurrentPage(selected);
  };

  return (
    <div className="examination-section">
      <div className="examination-cards">
        {currentPosts.map(({ noOfQuizzes, newExamTitle, image }, index) => {
          return (
            <ExamCard
              key={index}
              noOfQuizzes={noOfQuizzes}
              newExamTitle={newExamTitle}
              examImage={image}
            />
          );
        })}
      </div>
      <Pagination
        totalPosts={examinationData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default ExaminationSection;
