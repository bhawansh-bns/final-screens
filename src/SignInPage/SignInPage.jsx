import React from "react";
import Footer from "../components/footer/Footer";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <>
      <div>
        <SignIn />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default SignInPage;
