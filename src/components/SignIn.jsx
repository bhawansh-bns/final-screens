import React, { useState } from "react";
import styles from "../SignInPage/SignInPageStyles.module.css";

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

      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
