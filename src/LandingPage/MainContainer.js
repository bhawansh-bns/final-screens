import React from "react";
import Button from "../components/Button";
import styles from './LandingPageStyles.module.css';

const MainContainer = () => {
    return (
      <div className={styles.maincontainer}>

        <div className="m-2">Grep E-Licensing</div>

        <Button> <img src="photoCV.jpeg" /> </Button>

        <div >New user?</div>
        <Button> Sign Up</Button>
        
        <div>Already have an account?</div>
        <Button>Sign in</Button
        >
      </div>
    );
  };

export default MainContainer;