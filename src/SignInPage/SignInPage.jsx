import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignIn from "./SignIn";
import styles from "./SignInPageStyles.module.css";

function SignInPage() {
  return (
    <>
    <div className={styles.container}>
      <div >
        <h2>Sign In</h2>
        <SignIn />
      </div>
    </div>
      
      </>
    
  );
}

export default SignInPage;
