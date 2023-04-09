import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewersPopUp.module.css";

const ReviewersPopUp = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringL1Click = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onXTextClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onAcceptButtonContainerClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onAcceptButtonContainer1Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onAcceptButtonContainer2Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onAcceptButtonContainer3Click = useCallback(() => {
    navigate("/reviewer-dashboard");
  }, [navigate]);

  const onAcceptButtonContainer5Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onAcceptButtonContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.reviewersPopUp}>
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
          onClick={onYellowIllustrationCateringL1Click}
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
          className={styles.app3}
        >{` App - 3                              Reviewed `}</b>
        <div className={styles.groupChild7} />
        <div className={styles.lineDiv} />
        <img className={styles.groupChild8} alt="" src="/rectangle-32.svg" />
        <img className={styles.groupChild9} alt="" src="/rectangle-32.svg" />
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
        <img className={styles.download2Icon} alt="" src="/download-1@2x.png" />
        <img className={styles.download3Icon} alt="" src="/download-1@2x.png" />
        <div className={styles.groupChild10} />
        <div className={styles.reviewers}>REVIEWERS</div>
      </div>
      <div className={styles.reviewersPopUpChild} />
      <img
        className={styles.reviewersPopUpItem}
        alt=""
        src="/rectangle-392.svg"
      />
      <div className={styles.x} onClick={onXTextClick}>
        X
      </div>
      <div className={styles.acceptButtonParent}>
        <div
          className={styles.acceptButton}
          onClick={onAcceptButtonContainerClick}
        >
          <div className={styles.acceptButtonChild} />
          <b className={styles.remove}>Remove</b>
        </div>
        <b className={styles.underReview}>Under Review</b>
        <b className={styles.reviewer1}>Reviewer 1</b>
      </div>
      <div className={styles.acceptButtonGroup}>
        <div
          className={styles.acceptButton1}
          onClick={onAcceptButtonContainer1Click}
        >
          <div className={styles.acceptButtonChild} />
          <b className={styles.remove}>Remove</b>
        </div>
        <b className={styles.accepted}>Accepted</b>
        <b className={styles.reviewer2}>Reviewer 2</b>
      </div>
      <div className={styles.acceptButtonContainer}>
        <div
          className={styles.acceptButton2}
          onClick={onAcceptButtonContainer2Click}
        >
          <div className={styles.acceptButtonChild} />
          <b className={styles.remove}>Remove</b>
        </div>
        <b className={styles.underReview}>Under Review</b>
        <b className={styles.reviewer1}>Reviewer 3</b>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.listOfReviewers}>List of Reviewers</b>
        <b className={styles.status}>Status</b>
      </div>
      <div className={styles.acceptButton3}>
        <div className={styles.acceptButtonChild1} />
        <div className={styles.adminFeedbackContainer}>
          <span className={styles.grantLicenceTxtContainer}>
            <p className={styles.adminFeedback}>Admin Feedback</p>
            <p className={styles.blankLine5}>&nbsp;</p>
            <p className={styles.adminFeedback}>-------------</p>
            <p className={styles.adminFeedback}>-------------</p>
          </span>
        </div>
        <div
          className={styles.acceptButton4}
          onClick={onAcceptButtonContainer3Click}
        >
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild11} />
            <b className={styles.submit}>Submit</b>
          </div>
        </div>
      </div>
      <div
        className={styles.acceptButton5}
        onClick={onAcceptButtonContainer5Click}
      >
        <div className={styles.acceptButtonChild2} />
        <div className={styles.grantLicence}>
          <span className={styles.grantLicenceTxtContainer}>
            <p className={styles.adminFeedback}>{`Grant `}</p>
            <p className={styles.grep}>Licence</p>
          </span>
        </div>
      </div>
      <div
        className={styles.acceptButton6}
        onClick={onAcceptButtonContainer6Click}
      >
        <div className={styles.acceptButtonChild3} />
        <div className={styles.addReviewers}>Add Reviewers</div>
      </div>
    </div>
  );
};

export default ReviewersPopUp;
