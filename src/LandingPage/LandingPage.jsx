import React from "react";
import Footer from "../components/Footer";
import MainContainer from  './MainContainer'
import styles from './LandingPageStyles.module.css';



const LandingPage = () =>{
    return(
        <div className={styles.landingpage}>
            <MainContainer />
            <Footer />
        </div>
    );
};

export default LandingPage;