import React from "react";
import Footer from "../components/footer/Footer";
import SignIn from "./SignIn";
import styles from "./SignInPageStyles.module.css";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <>
    <div className={styles.container}>
        <h2>Sign In</h2>
        <SignIn />
        <Footer />
      </div> 
    </>
    
  );
}

export default SignInPage;
