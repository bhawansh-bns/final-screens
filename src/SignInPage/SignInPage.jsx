import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignIn from "./SignIn";
import styles from "./SignInPageStyles.module.css";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <>
    <div className={styles.container}>
      <div >
        <h2>Sign In</h2>
        <SignIn />
        {/* <div className={styles.signupLink}>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div> */}
      </div>
    </div>
      
      </>
    
  );
}

export default SignInPage;
