import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewersApplicationPopUp.module.css";

const ReviewersApplicationPopUp = () => {
  const navigate = useNavigate();

  const onXTextClick = useCallback(() => {
    navigate("/reviewer-dashboard");
  }, [navigate]);

  const onAcceptButtonContainerClick = useCallback(() => {
    navigate("/reviewer-dashboard");
  }, [navigate]);

  return (
    <div className={styles.reviewersApplicationPopUp}>
      <img
        className={styles.yellowIllustrationCateringL}
        alt=""
        src="/yellow-illustration-catering-logo--2-2@2x.png"
      />
      <div className={styles.navigationBarParent}>
        <img className={styles.navigationBarIcon} alt="" />
        <img
          className={styles.blocktradeLogo61}
          alt=""
          src="/blocktrade-logo-6-1@2x.png"
        />
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-1.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.searchOrType}>Search or type a command</div>
        <img
          className={styles.yellowIllustrationCateringL1}
          alt=""
          src="/yellow-illustration-catering-logo--1@2x.png"
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
          className={styles.yellowIllustrationCateringL2}
          alt=""
          src="/yellow-illustration-catering-logo--2-2@2x.png"
        />
        <b className={styles.applications}>Applications</b>
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-32.svg" />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <b
          className={styles.app1}
        >{` App - 1                              Assigned `}</b>
        <b
          className={styles.app2}
        >{` App - 2                          Under Review `}</b>
        <b
          className={styles.app3}
        >{` App - 3                              Reviewed `}</b>
        <div className={styles.groupChild7} />
        <b className={styles.nameStatus}> NAME STATUS</b>
        <div className={styles.groupChild8} />
        <div className={styles.lineDiv} />
        <img className={styles.groupChild9} alt="" src="/rectangle-32.svg" />
        <img className={styles.groupChild10} alt="" src="/rectangle-32.svg" />
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
        <img className={styles.download2Icon} alt="" src="/download-1@2x.png" />
        <img className={styles.download3Icon} alt="" src="/download-1@2x.png" />
        <div className={styles.groupChild11} />
        <div className={styles.reviewers}>REVIEWERS</div>
      </div>
      <div className={styles.reviewersApplicationPopUpChild} />
      <div className={styles.reviewersApplicationPopUpItem} />
      <div className={styles.x} onClick={onXTextClick}>
        X
      </div>
      <img
        className={styles.readmissionApplicationForm1Icon}
        alt=""
        src="/readmissionapplicationform-1@2x.png"
      />
      <div
        className={styles.acceptButton}
        onClick={onAcceptButtonContainerClick}
      >
        <div className={styles.acceptButtonChild} />
        <b className={styles.accept}>ACCEPT</b>
      </div>
      <div className={styles.acceptButton1}>
        <div className={styles.acceptButtonItem} />
        <b className={styles.reject}>REJECT</b>
      </div>
      <div className={styles.reviewersApplicationPopUpInner} />
      <b className={styles.typeFeedback}>Type feedback...</b>
      <b className={styles.feedback}>{`FEEDBACK `}</b>
    </div>
  );
};

export default ReviewersApplicationPopUp;
