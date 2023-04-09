import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ClientPopUp.module.css";

const ClientPopUp = () => {
  const navigate = useNavigate();

  const onYellowIllustrationCateringLClick = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  const onXTextClick = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  return (
    <div className={styles.clientPopUp}>
      <img className={styles.navigationBarIcon} alt="" />
      <img
        className={styles.blocktradeLogo61}
        alt=""
        src="/blocktrade-logo-6-1@2x.png"
      />
      <div className={styles.clientPopUpChild} />
      <div className={styles.navigationBarIcon} />
      <div className={styles.clientPopUpInner} />
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
      <div className={styles.clientPopUpChild1} />
      <div className={styles.div}>4</div>
      <b className={styles.dashboard}>Dashboard</b>
      <div className={styles.reviewers}>REVIEWERS</div>
      <div className={styles.clientPopUpChild2} />
      <div className={styles.upload}>Upload</div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-391.svg" />
        <div className={styles.antDesigncloudUploadOutlinParent}>
          <img
            className={styles.antDesigncloudUploadOutlinIcon}
            alt=""
            src="/antdesignclouduploadoutlined.svg"
          />
          <div className={styles.dragAndDrop}> Drag and Drop here</div>
          <div className={styles.orWrapper}>
            <div className={styles.or}>or</div>
          </div>
          <div className={styles.selectFileWrapper}>
            <div className={styles.selectFile}> Select file</div>
          </div>
        </div>
      </div>
      <div className={styles.x} onClick={onXTextClick}>
        X
      </div>
    </div>
  );
};

export default ClientPopUp;
