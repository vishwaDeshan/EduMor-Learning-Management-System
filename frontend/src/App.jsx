import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Quiz from "./Components/QuizHandler/Quiz";
import AdminRequests from "./Pages/SuperAdmin/AdminRequests/AdminRequests";
import SuperAdminSettings from "./Pages/SuperAdmin/SuperAdminSettings/SuperAdminSettings";
import AdminSAOverview from "./Pages/SuperAdmin/AdminSAOverview/AdminSAOverview";
import StudentSAOverview from "./Pages/SuperAdmin/studentSAoverview/studentSAOverview";
import superAdminExaminationOverview from "./Pages/SuperAdmin/superAdminExaminationOverview/superAdminExaminationOverview"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/examinations" element={<Examinations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myPayments" element={<Payment />} />
          <Route path="/myExams" element={<MyExams />} />
          <Route path="/Exam" element={<ExamModule />} />
          <Route path="/adminOverview" element={<OverviewAdmin />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Overview />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/land" element={<LandingPage />} />
          <Route path="/superAdminOverview" element={<AdminSAOverview />} />
          <Route path="/superAdminStudentoverview" element={<StudentSAOverview />}/>
          <Route path="/superAdminExaminationOverview" element={<superAdminExaminationOverview />}/>
          <Route path="/superAdminSettings" element={<SuperAdminSettings />} />
          <Route path="/superAdminDashboard" element={<SADashboard />} />
          <Route path="/adminRequests" element={<AdminRequests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

