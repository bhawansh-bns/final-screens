import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminsApplicationPopUp.module.css";

const AdminsApplicationPopUp = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringL1Click = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onRectangle12Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='app2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onXTextClick = useCallback(() => {
    navigate("/admin-dashboard");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.adminsApplicationPopUp}>
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
          className={styles.app2}
          data-scroll-to="app2"
        >{` App - 2                          Under Review `}</b>
        <b
          className={styles.app3}
        >{` App - 3                              Reviewed `}</b>
        <div className={styles.groupChild7} />
        <b className={styles.nameStatus}> NAME STATUS</b>
        <div className={styles.lineDiv} />
        <img className={styles.groupChild8} alt="" src="/rectangle-32.svg" />
        <img className={styles.groupChild9} alt="" src="/rectangle-32.svg" />
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
        <img className={styles.download2Icon} alt="" src="/download-1@2x.png" />
        <img className={styles.download3Icon} alt="" src="/download-1@2x.png" />
        <div className={styles.groupChild10} />
        <div className={styles.reviewers}>REVIEWERS</div>
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.groupChild11}
          alt=""
          src="/rectangle-393.svg"
          onClick={onRectangle12Click}
        />
        <div className={styles.x} onClick={onXTextClick}>
          X
        </div>
      </div>
      <div className={styles.frameParent} onClick={onFrameContainer1Click}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} data-scroll-to="rectangle" />
        </div>
        <b className={styles.reviewer3}>Reviewer 3</b>
        <b className={styles.unassigned}>Unassigned</b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <b className={styles.reviewer3}>Reviewer 4</b>
        <b className={styles.unassigned}>Unassigned</b>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <b className={styles.reviewer3}>Reviewer 5</b>
        <b className={styles.unassigned}>Assigned</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <b className={styles.reviewer3}>Reviewer 6</b>
        <b className={styles.unassigned}>Assigned</b>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <b className={styles.reviewer3}>Reviewer 2</b>
        <b className={styles.unassigned}>Assigned</b>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <b className={styles.reviewer3}>Reviewer 1</b>
        <b className={styles.unassigned}>Unassigned</b>
        <div className={styles.acceptButton}>
          <div className={styles.acceptButtonChild} />
          <b className={styles.reassign}>Reassign</b>
          <div className={styles.acceptButton1}>
            <div className={styles.acceptButtonItem} />
            <b className={styles.reviewer}>Reviewer</b>
          </div>
        </div>
        <div className={styles.frameChild4} />
        <b className={styles.reviewers1}>Reviewers</b>
        <b className={styles.status}>Status</b>
      </div>
    </div>
  );
};

export default AdminsApplicationPopUp;
