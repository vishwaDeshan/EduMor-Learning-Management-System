import React, { useState, useEffect } from 'react';
import questions from '../../Data/questions';
import './Quiz.css';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      const timer = setTimeout(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(time => time - 1);
        } else {
          submitAnswers();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeRemaining, quizStarted]);

  const startQuiz = () => {
    setTimeRemaining(questions.length * 60);
    setQuizStarted(true);
  };

  const submitAnswer = () => {
    setCurrentQuestion(question => question + 1);
  };

  const submitAnswers = () => {
    setCurrentQuestion(questions.length);
  };

  const handleChange = event => {
    setAnswers(answers => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = event.target.value;
      return newAnswers;
    });
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const currentQuestionData = questions[currentQuestion];

  if (currentQuestion === questions.length) {
    return <Results answers={answers} />;
  }

  //quiz Answering section
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
      {quizStarted ? (
    <div className="quiz-container">
      <div className="quiz-question" id={currentQuestion}>
        <h1>Question {currentQuestion + 1}</h1>
        <h5>{currentQuestionData.question}</h5>
        <form>
          {currentQuestionData.answers.map((answer, index) => (
            <div key={index}>
              <label>
                <input type="radio" name="answer" value={answer} checked={answers[currentQuestion] === answer} onChange={handleChange} />
                {answer}
              </label>
            </div>
          ))}
        </form>
        <button onClick={submitAnswer} disabled={!answers[currentQuestion]}>Next</button>
      </div>

      <div className="quiz-nav">
        <h2>Quiz Navigation</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <a href={`#${index}`} className={currentQuestion === index ? 'active' : ''}>{index + 1}</a>
            </li>
          ))}
        </ul>
        <p className='time-remaining'>Time remaining: {formatTime(timeRemaining)}</p>
      </div>
    </div>
      ):(
        <div className='quiz-instructions'>
          <h1>Quiz Instructions</h1>
          <h5>Instructions</h5>
          <ol>
            <li>Read each question carefully and select the most suitable answer</li>
            <li>You have {questions.length} multiple choice questions to answer</li>
            <li>The questions appear sequentially. Once you proceed, you will no longer have access to the previous questions.</li>
            <li>When time is over, given answers will be auto-submitted</li>
            </ol>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}
    </div>
  );
}

//Quiz results
function Results({ answers }) {
  const numCorrect = answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  const percentage = ((numCorrect / questions.length) * 100).toFixed(2);

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
      <p className='results-summary'>You answered {numCorrect} out of {questions.length} questions correctly.</p>
      <p className='results-score'>Your score: <h2>{percentage}%</h2></p>
      <ol className='results-list'>
        {questions.map((question, index) => (
          <li key={index} className={answers[index] === question.correctAnswer ? 'correct' : 'incorrect'}>
            <p>Question {index + 1}: {question.question}</p>
            <p>Your answer: {answers[index]}</p>
            <p>Correct answer: {question.correctAnswer}</p>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}


export default Quiz;
