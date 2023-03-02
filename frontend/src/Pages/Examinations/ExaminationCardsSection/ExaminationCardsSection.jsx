import React, { useEffect, useState } from "react";
import ExamCard from "../../../Components/ExamCard/ExamCards"
import "./ExaminationCardsSection.css";
import Pagination from '../../../Components/Pagination/Pagination'
import axios from "axios";

function ExaminationSection() {
  const [exams, setExams] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = exams.slice(firstPostIndex, lastPostIndex);

  const pageCount = Math.ceil(currentPosts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setcurrentPage(selected);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/examinations')
      .then((res) => {
        setExams(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="examination-section">
      <div className="examination-cards">
        {currentPosts.map((exams, index) => {
          return (
            <ExamCard
              key={exams.index}
              // noOfQuizzes="10 Quizzes"
              newExamTitle={exams.examName}
              examImage={exams.photo}
            />
          );
        })}
      </div>
      <Pagination
        totalPosts={exams.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}
        type={1}
      />
    </div>
  );
}

export default ExaminationSection;
