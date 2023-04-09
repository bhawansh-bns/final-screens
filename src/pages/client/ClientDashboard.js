import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClientDashboard.module.css";

const ClientDashboard = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringLClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/client-application-dashboard");
  }, [navigate]);

  return (
    <div className={styles.clientDashboard}>
      <img className={styles.navigationBarIcon} alt="" />
      <img
        className={styles.blocktradeLogo61}
        alt=""
        src="/blocktrade-logo-6-1@2x.png"
      />
      <div className={styles.clientDashboardChild} />
      <div className={styles.navigationBarIcon} />
      <div className={styles.clientDashboardInner} />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.searchOrType}>Search or type a command</div>
      <img
        className={styles.yellowIllustrationCateringL}
        alt=""
        src="/yellow-illustration-catering-logo--1@2x.png"
        onClick={onYellowIllustrationCateringLClick}
      />
      <div className={styles.grepELicensing}>
        <p className={styles.grep}>Grep</p>
        <p className={styles.grep}>E-Licensing</p>
      </div>
      <div className={styles.homeActsContainer}>
        <p className={styles.grep}>Home</p>
        <p className={styles.grep}>&nbsp;</p>
        <p className={styles.grep}>{`Acts & Rules`}</p>
        <p className={styles.grep}>&nbsp;</p>
        <p className={styles.grep}>My Workspace</p>
        <p className={styles.grep}>&nbsp;</p>
        <p className={styles.grep}>MCA Services</p>
        <p className={styles.grep}>&nbsp;</p>
        <p className={styles.grep}>Data and Reports</p>
        <p className={styles.grep}>&nbsp;</p>
        <p className={styles.grep}>{`Help & FAQs`}</p>
      </div>
      <img
        className={styles.yellowIllustrationCateringL1}
        alt=""
        src="/yellow-illustration-catering-logo--2-2@2x.png"
      />
      <img
        className={styles.yellowIllustrationCateringL2}
        alt=""
        src="/yellow-illustration-catering-logo--2-2@2x.png"
      />
      <img
        className={styles.screenshot20230307At542}
        alt=""
        src="/screenshot-20230307-at-542-1@2x.png"
      />
      <div
        className={styles.clientDashboardChild1}
        onClick={onRectangle3Click}
      />
      <div className={styles.div}>4</div>
      <b className={styles.dashboard}>Dashboard</b>
      <div className={styles.reviewers}>REVIEWERS</div>
      <div className={styles.clientDashboardChild2} />
      <div className={styles.upload}>Upload</div>
    </div>
  );
};

export default ClientDashboard;
