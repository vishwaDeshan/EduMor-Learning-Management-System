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
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

