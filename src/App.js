import React from "react";
import { useEffect } from "react";
import LandingPage from "./LandingPage/LandingPage";
import ClientDashboard from "./client/ClientDashboard";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import ReviewerDashboard from "./reviewer/ReviewerDashboard";
import AdminDashboard from "./admin/AdminDashboard";

function App() {

  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage />} />
    //   <Route path="/sign-in" element={<SignInPage />} />
    //   <Route path="/sign-up" element={<SignUpPage />} />
    //   <Route path="/client-dashboard" element={<ClientDashboard />} />
    //   <Route path="/admin-dashboard" element={<AdminDashboard />} />
    //   <Route path="/reviewer-dashboard" element={<ReviewerDashboard />} />
    // </Routes>
    <ReviewerDashboard />
  );
}
export default App;
