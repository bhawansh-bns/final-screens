import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignUp from "./SignUpForm";
import styles from "./SignUpPageStyles.module.css";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

function SignUpPage() {
  return (
    <>
      <Stack spacing={0} mb={3}>
        <SignUp />
        
      </Stack>
      <div className={styles.last}>
          Already have an account? <br />
          <Button>
            <Link to="/sign-in">Sign in</Link>
          </Button>
        </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
