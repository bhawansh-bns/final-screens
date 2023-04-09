import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringLClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onAcceptButtonContainerClick = useCallback(() => {
    navigate("/reviewers-pop-up");
  }, [navigate]);

  const onAcceptButtonContainer1Click = useCallback(() => {
    navigate("/reviewers-pop-up");
  }, [navigate]);

  const onAcceptButtonContainer3Click = useCallback(() => {
    navigate("/reviewers-pop-up");
  }, [navigate]);

  const onAcceptButtonContainer4Click = useCallback(() => {
    navigate("/reviewers-pop-up");
  }, [navigate]);

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.re}>re</div>
      <img className={styles.navigationBarIcon} alt="" />
      <img
        className={styles.blocktradeLogo61}
        alt=""
        src="/blocktrade-logo-6-1@2x.png"
      />
      <div className={styles.adminDashboardChild} />
      <div className={styles.navigationBarIcon} />
      <div className={styles.adminDashboardInner} />
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
      <b className={styles.applications}>Applications</b>
      <div className={styles.adminDashboardChild1} />
      <div className={styles.adminDashboardChild2} />
      <div className={styles.adminDashboardChild3} />
      <div className={styles.reviewers}>REVIEWERS</div>
      <div className={styles.adminDashboardChild4} />
      <div className={styles.reviewers1}>REVIEWERS</div>
      <b className={styles.name}>Name</b>
      <b className={styles.status}>Status</b>
      <b className={styles.reviewers2}>Reviewers</b>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.application1}>{`  Application 1   `}</b>
        <b className={styles.application11}>{`  Application 1   `}</b>
        <div
          className={styles.acceptButton}
          onClick={onAcceptButtonContainerClick}
        >
          <div className={styles.acceptButtonChild} />
          <b className={styles.view}>View</b>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <b className={styles.application1}>{`  Application 2   `}</b>
        <b className={styles.application11}>{`  Application 1   `}</b>
        <div
          className={styles.acceptButton1}
          onClick={onAcceptButtonContainer1Click}
        >
          <div className={styles.acceptButtonItem} />
          <b className={styles.view1}>View</b>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild} />
        <b className={styles.application1}>{`  Application 3   `}</b>
        <b className={styles.application11}>{`  Application 1   `}</b>
        <div className={styles.acceptButton2}>
          <div className={styles.acceptButtonChild} />
          <b className={styles.view2}>View</b>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
        <b className={styles.application1}>{`  Application 4   `}</b>
        <b className={styles.application11}>{`  Application 1   `}</b>
        <div
          className={styles.acceptButton1}
          onClick={onAcceptButtonContainer3Click}
        >
          <div className={styles.acceptButtonItem} />
          <b className={styles.view3}>View</b>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild} />
        <b className={styles.application1}>{`  Application 5   `}</b>
        <b className={styles.application11}>{`  Application 1   `}</b>
        <div
          className={styles.acceptButton}
          onClick={onAcceptButtonContainer4Click}
        >
          <div className={styles.acceptButtonChild} />
          <b className={styles.view2}>View</b>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
