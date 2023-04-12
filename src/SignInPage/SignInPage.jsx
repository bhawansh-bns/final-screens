import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignIn from "../components/SignIn";
import styles from "./SignInPageStyles.module.css";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className={styles.container}>
      <div className={styles.signinContainer}>
        <h2>Sign In</h2>
        <SignIn />
        {/* <div className={styles.signupLink}>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div> */}
      </div>
      <Footer className={styles.footer}>
        <Button className={styles.footerbutton}>Learn</Button>
        <Button className={styles.footerbutton}>Support</Button>
        <Button className={styles.footerbutton}>About Us</Button>
        <Button className={styles.footerbutton}>Contact Us</Button>
      </Footer>
    </div>
  );
}

export default SignInPage;
