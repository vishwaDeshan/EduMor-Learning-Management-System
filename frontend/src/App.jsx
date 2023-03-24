import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import UserdetailsPage from "./Pages/Admin/UserDetails/UserdetailsPage/UserdetailsPage";
import Paymentpage from "./Pages/Admin/Payments/Paymentpage/Paymentpage";
import VideoUploadPage from "./Pages/Admin/VideoUploadSection/VideoUploadPage";
import QuizePage from "./Pages/Admin/QuizeSection/QuizePage";
import AdvertisementPage from "./Pages/Admin/Advertisement/AdvertisementPage";
import ForgotPassword from "./Pages/Login/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import VerifyEmail from "./Pages/Login/VerifyEmail/VerifyEmail";
import Test from "./Pages/Test/TestUploads";
import VideosPage from "./Pages/VideosPage/VideosPage";
import NewsPage from "./Pages/Admin/News/NewsPage";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const logoutUser = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("AUTH_TOKEN");
    window.location.replace("/login");
  }
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        setUser(null);
        setIsLoggedIn(false);
        // window.location.replace("/login");
      } else {
        setUser(decodedToken);
        setIsLoggedIn(true);

      }
      console.log(decodedToken);
    }

  }, [])

  return (
    <div className="App">
      { <BrowserRouter>
        <Routes>
          <Route path="/examinations" element={<Examinations isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} user={user} logoutUser={logoutUser} />} />
          <Route path="/myPayments" element={<Payment isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="/myExams" element={<MyExams isLoggedIn={isLoggedIn} user={user}/>} />
          <Route exact path="/examinations/:_id" element={<ExamModule isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="/adminOverview" element={<OverviewAdmin />} />
          <Route path="/vacancies" element={<VacanciesPage isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="/login" element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/superAdminDashboard" element={<SADashboard />} />
          <Route path="/adminRequests" element={<AdminRequests />} />
          <Route path="/" element={<Overview isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="/level/quiz/:id" element={<Quiz isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/land" element={<LandingPage/>}/>
          <Route path="/adminOverview" element={<OverviewAdmin />} />
          <Route path="/userDetails" element={<UserdetailsPage/>}/>
          <Route path="/paymentsData" element={<Paymentpage/>}/>
          <Route path="/videoUpload" element={<VideoUploadPage/>}/>
          <Route path="/quizUpload" element={<QuizePage/>}/>
          <Route path="/adsUpload" element={<AdvertisementPage/>}/>
          <Route path="/land" element={<LandingPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/examinations/lectureVideos" element={<VideosPage isLoggedIn={isLoggedIn} user={user} />} />
          <Route path="/test" element={<Test />} />
          <Route path="/newsUpload" element={<NewsPage/>}/>
        </Routes>
      </BrowserRouter> }
    </div>
  );
}


export default App;

