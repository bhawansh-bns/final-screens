import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import MainContainer from  './MainContainer'
import styles from './LandingPageStyles.module.css';



const LandingPage = () =>{
    return(
        <div className={styles.landingpage}>
        <MainContainer />
        <Footer className={styles.footer}>
            <Button className={styles.footerbutton}>Learn</Button>
            <Button className={styles.footerbutton}>Support</Button>
            <Button className={styles.footerbutton}>About Us</Button>
            <Button className={styles.footerbutton}>Contact Us</Button>
        </Footer>
        </div>
    );
};

export default LandingPage;