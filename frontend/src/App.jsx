import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview/OverviewPage/Overview";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Examinations from "./Pages/Examinations/ExaminationsPage/ExaminationsPage";
import Checkout from "./Pages/Checkout/Checkout";
import Profile from "./Pages/Profile/Profile";
import Payment from "./Pages/Payments/Payment";
import MyExams from "./Pages/MyExams/MyExams";
import ExamModule from "./Pages/ExamModule/ExamModule";
import OverviewAdmin from "./Pages/Admin/Overview/OverviewAdmin";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup"
<<<<<<< HEAD
import LandingPage from "./Pages/Landing Page/LandingPage"
=======
import VacanciesPage from "./Pages/Vacancy/VacancyPage/VacanciesPage";

>>>>>>> 4c490b11a8b4e1fc37306b56f6e4ee2cc7e7cfcc

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/examinations" element={<Examinations />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myPayments" element={<Payment />} />
          <Route path="/myExams" element={<MyExams />} />
          <Route path="/sampleExam" element={<ExamModule/>}/>
          <Route path="/adminOverview" element={<OverviewAdmin/>}/>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/land" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

