import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onRegisterButtonContainerClick = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  const onAppleTextClick = useCallback(() => {
    navigate("/client-dashboard");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <div className={styles.footer} />
      <div className={styles.footerTags}>
        <div className={styles.learn}>Learn</div>
        <div className={styles.support}>Support</div>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.footer1}>
        <div className={styles.footer2} />
        <div className={styles.footerTags1}>
          <div className={styles.learn}>Learn</div>
          <div className={styles.support}>Support</div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
      </div>
      <div className={styles.alreadyHaveAnContainer}>
        {`Already have an account? `}
        <span className={styles.signIn}>Sign in</span>
      </div>
      <div className={styles.registerBackground}>
        <div className={styles.registerBackgroundChild} />
        <b className={styles.signUp}>Sign Up</b>
        <div className={styles.orSignUpContainer}>
          <p className={styles.or}>
            --------------------OR--------------------
          </p>
          <p className={styles.or}>Sign up with</p>
        </div>
        <div className={styles.registerBackgroundItem} />
      </div>
      <div
        className={styles.registerButton}
        onClick={onRegisterButtonContainerClick}
      >
        <div className={styles.registerButtonChild} />
        <div className={styles.signUp1}>Sign Up</div>
      </div>
      <div className={styles.firstName}>
        <div className={styles.firstNameChild} />
        <div className={styles.firstName1}>First name</div>
      </div>
      <div className={styles.confirmPassword}>
        <div className={styles.firstNameChild} />
        <div className={styles.confirmPassword1}>Confirm password</div>
      </div>
      <div className={styles.password}>
        <div className={styles.firstNameChild} />
        <div className={styles.firstName1}>Password</div>
      </div>
      <div className={styles.phoneNumber}>
        <div className={styles.phoneNumberChild} />
        <div className={styles.phoneNumberDropDown}>
          <div className={styles.phoneNumberDropDownChild} />
          <img
            className={styles.blocktradeLogo34}
            alt=""
            src="/blocktrade-logo-3-4@2x.png"
          />
          <div className={styles.div}>+91</div>
        </div>
        <div className={styles.phoneNumber1}>Phone number</div>
      </div>
      <div className={styles.lastName}>
        <div className={styles.firstNameChild} />
        <div className={styles.firstName1}>Last name</div>
      </div>
      <div className={styles.email}>
        <div className={styles.emailChild} />
        <div className={styles.firstName1}>Email</div>
      </div>
      <div className={styles.signUpPageChild} onClick={onRectangle10Click} />
      <div className={styles.google}>Google</div>
      <img
        className={styles.blocktradeLogo51}
        alt=""
        src="/blocktrade-logo-5-1@2x.png"
      />
      <img
        className={styles.yellowIllustrationCateringL}
        alt=""
        src="/yellow-illustration-catering-logo--1-1@2x.png"
      />
      <div className={styles.apple} onClick={onAppleTextClick}>
        Apple
      </div>
    </div>
  );
};

export default SignUpPage;
