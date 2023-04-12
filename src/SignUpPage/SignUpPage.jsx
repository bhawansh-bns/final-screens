import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SignUp from "./SignUp";
import styles from "./SignUpPageStyles.module.css";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

function SignUpPage() {
  return (
    <>
    <Stack spacing={1}>
        <SignUp />
    </Stack>
    <Footer/>
   </>
  );
}

export default SignUpPage;
