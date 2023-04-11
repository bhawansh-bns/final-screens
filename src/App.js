import React from "react";
import { useEffect } from "react";
import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

    </Routes>
  );
}
export default App;