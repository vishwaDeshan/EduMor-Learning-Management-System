import React, { useState, useEffect } from 'react';
import questions from '../../../Data/questions';
import '../Quiz/Quiz.css';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import axios from 'axios';

function Results({ answers, qid }) {
  const [quizAnswer, setQuizAnswer] = useState({});
  const numCorrect = answers.filter((answer, index) => answer === quizAnswer[index]?.correctAnswer).length;
  const percentage = ((numCorrect / Object.keys(quizAnswer).length) * 100).toFixed(2);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/level/quiz/${qid}`)
      .then((res) => {
        if (res.data) {
          setQuizAnswer(res.data.questions);
        } else {
          alert('Quiz data not found');
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [qid]);

  return (
    <div>
      <div className="read-crumb-quiz">
        <MDBBreadcrumb >
          <MDBBreadcrumbItem>
            <a href='/'>Overview</a>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem ><a href='/examinations'>Examination</a></MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Quiz</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </div>

      <div className='quiz-results'>
        <h1 className='results-heading'>Quiz Results</h1>
        <p className='results-summary'>You answered {numCorrect} out of {Object.keys(quizAnswer).length} questions correctly.</p>
        <p className='results-score'>Your score: <h2>{percentage}%</h2></p>
        <ol className='results-list'>
          {Object.keys(quizAnswer).map((key, index) => (
            <li key={key} className={answers[index] === quizAnswer[key].correctAnswer ? 'correct' : 'incorrect'}>
              <p>Question {index + 1}: {quizAnswer[key].question}</p>
              <p>Your answer: {answers[index]}</p>
              <p>Correct answer: {quizAnswer[key].correctAnswer}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Results