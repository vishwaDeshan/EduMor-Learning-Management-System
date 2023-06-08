import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt_decode from 'jwt-decode';

import Overview from "./Pages/Overview/OverviewPage/Overview";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Examinations from "./Pages/Examinations/ExaminationsPage/ExaminationsPage";
import Profile from "./Pages/Profile/Profile";
import Payment from "./Pages/Payments/Payment";
import MyExams from "./Pages/MyExams/MyExams";
import ExamModule from "./Pages/ExamModule/ExamModule";
import OverviewAdmin from "./Pages/Admin/Overview/OverviewAdmin";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup"
import LandingPage from "./Pages/Landing Page/LandingPage"
import VacanciesPage from "./Pages/Vacancy/VacancyPage/VacanciesPage";
import SADashboard from "./Pages/SuperAdmin/SADashboard/SADashboard";
import Quiz from "./Components/QuizHandler/Quiz/Quiz";
import AdminRequests from "./Pages/SuperAdmin/AdminRequests/AdminRequests";
import ForgotPassword from "./Pages/Login/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import VerifyEmail from "./Pages/Login/VerifyEmail/VerifyEmail";
import Test from "./Pages/Test/TestUploads";
import VideosPage from "./Pages/VideosPage/VideosPage";
import ExamResult from "./Pages/ExamResult/ExamResults";
import Success from "./Components/Checkout/Success";
import Cancel from "./Components/Checkout/Cancel";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('AUTH_TOKEN'));
  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        setUser(null);
        setIsLoggedIn(false);
        dispatch({type:"SET_USER",payload:{
          isLoggedIn:false,
          users:null,
          token:null
        }})
      } else {
        setUser(decodedToken);
        setIsLoggedIn(true);
        dispatch({type:"SET_USER",payload:{
          isLoggedIn:true,
          users:user,
          token:decodedToken
        }})
      }
    } else {
      dispatch({type:"SET_USER",payload:{
        isLoggedIn:false,
        users:null,
        token:null
      }})
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/examinations" element={<Examinations/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/myPayments" element={<Payment/>} />
          <Route path="/myExams" element={<MyExams/>} />
          <Route exact path="/examinations/:_id" element={<ExamModule/>} />
          <Route path="/adminOverview" element={<OverviewAdmin />} />
          <Route path="/vacancies" element={<VacanciesPage/>} />
          <Route path="/login" element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/superAdminDashboard" element={<SADashboard />} />
          <Route path="/adminRequests" element={<AdminRequests />} />
          <Route path="/" element={<Overview/>} />
          <Route path="/level/quiz/:id" element={<Quiz/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/land" element={<LandingPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/examinations/lectureVideos" element={<VideosPage/>} />
          <Route path="/quizResults/:userId/:examId" element={<ExamResult/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

