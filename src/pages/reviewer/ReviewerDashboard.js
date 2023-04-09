import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewerDashboard.module.css";

const ReviewerDashboard = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringLClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onDownload5IconClick = useCallback(() => {
    navigate("/reviewers-application-pop-up");
  }, [navigate]);

  const onDownload4IconClick = useCallback(() => {
    navigate("/reviewers-application-pop-up");
  }, [navigate]);

  const onDownload1IconClick = useCallback(() => {
    navigate("/reviewers-application-pop-up");
  }, [navigate]);

  const onDownload2IconClick = useCallback(() => {
    navigate("/reviewers-application-pop-up");
  }, [navigate]);

  const onDownload3IconClick = useCallback(() => {
    navigate("/reviewers-application-pop-up");
  }, [navigate]);

  return (
    <div className={styles.reviewerDashboard}>
      <div className={styles.re}>re</div>
      <img className={styles.navigationBarIcon} alt="" />
      <img
        className={styles.blocktradeLogo61}
        alt=""
        src="/blocktrade-logo-6-1@2x.png"
      />
      <div className={styles.reviewerDashboardChild} />
      <div className={styles.navigationBarIcon} />
      <div className={styles.reviewerDashboardInner} />
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
      <div className={styles.reviewerDashboardChild1} />
      <div className={styles.reviewerDashboardChild2} />
      <img
        className={styles.download5Icon}
        alt=""
        src="/download-1@2x.png"
        onClick={onDownload5IconClick}
      />
      <b className={styles.application5}> Application 5</b>
      <div className={styles.reviewerDashboardChild3} />
      <img
        className={styles.download4Icon}
        alt=""
        src="/download-1@2x.png"
        onClick={onDownload4IconClick}
      />
      <b className={styles.viewDoc}> view doc</b>
      <b className={styles.viewDoc1}> view doc</b>
      <b className={styles.application4}> Application 4</b>
      <b className={styles.viewDoc2}> view doc</b>
      <div className={styles.reviewerDashboardChild4} />
      <b className={styles.viewDoc3}> view doc</b>
      <b className={styles.viewDoc3}> view doc</b>
      <b className={styles.application2}> Application 2</b>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-32.svg" />
      <div className={styles.reviewerDashboardChild5} />
      <b className={styles.application2}> Application 2</b>
      <b className={styles.application2}> Application 2</b>
      <b className={styles.application3}> Application 3</b>
      <div className={styles.reviewerDashboardChild6} />
      <b className={styles.application1}> Application 1</b>
      <b className={styles.viewDoc5}> view doc</b>
      <b className={styles.viewDoc6}> view doc</b>
      <b className={styles.viewDoc7}> view doc</b>
      <div className={styles.reviewerDashboardChild7} />
      <b className={styles.nameDocuments}>Name Documents</b>
      <div className={styles.lineDiv} />
      <img
        className={styles.reviewerDashboardChild8}
        alt=""
        src="/rectangle-32.svg"
      />
      <img
        className={styles.reviewerDashboardChild9}
        alt=""
        src="/rectangle-32.svg"
      />
      <img
        className={styles.download1Icon}
        alt=""
        src="/download-1@2x.png"
        onClick={onDownload1IconClick}
      />
      <img
        className={styles.download2Icon}
        alt=""
        src="/download-1@2x.png"
        onClick={onDownload2IconClick}
      />
      <img
        className={styles.download3Icon}
        alt=""
        src="/download-1@2x.png"
        onClick={onDownload3IconClick}
      />
    </div>
  );
};

export default ReviewerDashboard;
