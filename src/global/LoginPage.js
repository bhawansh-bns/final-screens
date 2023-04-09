import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.footer}>
        <div className={styles.footer1} />
        <div className={styles.footerTags}>
          <div className={styles.learn}>Learn</div>
          <div className={styles.support}>Support</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
      </div>
      <div className={styles.registerBackgroundParent}>
        <div className={styles.registerBackground}>
          <div className={styles.registerBackgroundChild} />
          <b className={styles.signIn}>SIGN IN</b>
          <div
            className={styles.registerBackgroundItem}
            onClick={onRectangle1Click}
          />
        </div>
        <div className={styles.groupChild} onClick={onRectangle2Click} />
        <div className={styles.registerButton}>
          <div className={styles.registerButtonChild} />
          <div className={styles.signIn1} onClick={onSignInTextClick}>
            Sign in
          </div>
        </div>
        <div className={styles.password}>
          <div className={styles.passwordChild} />
          <div className={styles.password1}>Password</div>
        </div>
        <div className={styles.email}>
          <div className={styles.emailChild} />
          <div className={styles.email1}>Email</div>
        </div>
        <div className={styles.google}>Google</div>
        <div className={styles.apple}>Apple</div>
        <img
          className={styles.blocktradeLogo51}
          alt=""
          src="/blocktrade-logo-5-1@2x.png"
        />
      </div>
      <div className={styles.or}>
        --------------------OR--------------------
      </div>
      <img
        className={styles.yellowIllustrationCateringL}
        alt=""
        src="/yellow-illustration-catering-logo--1-1@2x.png"
      />
      <div className={styles.login}>
        <i className={styles.signInWith}>Sign in with</i>
      </div>
      <div className={styles.dontHaveAnContainer}>
        {`Don’t have an account? `}
        <span className={styles.signUp}>Sign up</span>
      </div>
    </div>
  );
};

export default LoginPage;
