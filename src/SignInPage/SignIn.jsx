import React, { useState } from "react";
import Button from "../components/button/Button";
import styles from "../SignInPage/SignInPageStyles.module.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: implement sign in logic
  };

  return (
    <form className={styles.form} onSubmit={handleSignIn}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/client-dashboard">
      <Button type="submit">Sign In</Button>
      </Link>
      
    </form>
  );
}

export default SignIn;
