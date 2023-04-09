import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClientApplicationDashboard.module.css";

const ClientApplicationDashboard = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringLClick = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  return (
    <div className={styles.clientApplicationDashboard}>
      <img className={styles.navigationBarIcon} alt="" />
      <img
        className={styles.blocktradeLogo61}
        alt=""
        src="/blocktrade-logo-6-1@2x.png"
      />
      <div className={styles.clientApplicationDashboardChild} />
      <div className={styles.navigationBarIcon} />
      <div className={styles.clientApplicationDashboardInner} />
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
      <b className={styles.myApplications}>My Applications</b>
      <div className={styles.clientApplicationDashboardChild1} />
      <div className={styles.clientApplicationDashboardChild2} />
      <div className={styles.image1Wrapper}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      </div>
      <b className={styles.searchApplications}>{`|Search Applications `}</b>
      <div className={styles.name}>Name</div>
      <div className={styles.status}>Status</div>
      <div className={styles.lastEdited}>Last Edited</div>
      <div className={styles.companyName1Parent}>
        <b className={styles.companyName1}>Company Name 1</b>
        <div className={styles.april12023}>April 1, 2023 at 00:00 PM</div>
        <div className={styles.approved}>Approved</div>
        <img className={styles.frameChild} alt="" src="/rectangle-50@2x.png" />
      </div>
      <div className={styles.companyName2Parent}>
        <b className={styles.companyName1}>Company Name 2</b>
        <div className={styles.april12023}>April 1, 2023 at 00:00 PM</div>
        <div className={styles.approved1}>In-Progress</div>
        <img className={styles.frameChild} alt="" src="/rectangle-50@2x.png" />
      </div>
      <div className={styles.companyName3Parent}>
        <b className={styles.companyName1}>Company Name 3</b>
        <div className={styles.april12023}>April 1, 2023 at 00:00 PM</div>
        <div className={styles.approved}>Approved</div>
        <img className={styles.frameChild} alt="" src="/rectangle-50@2x.png" />
      </div>
      <div className={styles.companyName4Parent}>
        <b className={styles.companyName1}>Company Name 4</b>
        <div className={styles.april12023}>April 1, 2023 at 00:00 PM</div>
        <div className={styles.approved3}>In-Progress</div>
        <img className={styles.frameChild} alt="" src="/rectangle-50@2x.png" />
      </div>
    </div>
  );
};

export default ClientApplicationDashboard;
