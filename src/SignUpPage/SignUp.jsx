import React, { useState, useEffect } from "react";
import styles from "../SignUpPage/SignUpPageStyles.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const history = useHistory();
  axios.defaults.withCredentials = true;

  const cordaAccount = (port, accountName) => {
    axios
      .post(`https://localhost:${port}/createAccount/${accountName}`, {})
      .then((response) => {
        console.log(response);
        if (port == 8446) {
          shareAccount(port, accountName, "Applicant");
          shareAccount(port, accountName, "Reviewer");
        } else if (port == 8449 || port == 8443) {
          shareAccount(port, accountName, "Admin");
        }
      });
  };
  const shareAccount = (port, accountName, node) => {
    axios
      .post(`https://localhost:${port}/shareAccount/${accountName}/${node}`, {})
      .then((response) => {
        console.log(response);
      });
  };

  const signUp = () => {
    axios
      .post("http://localhost:3001/register", {
        username: userName,
        password: password,
        email: email,
        role: role,
      })
      .then((response) => {
        console.log(response);
        if (role == "Applicant") {
          cordaAccount(8443, userName);
        } else if (role == "Admin") {
          cordaAccount(8446, userName);
        } else if (role == "Reviewer") {
          cordaAccount(8449, userName);
        }
        history.push("/sign-in");
      });

    history.push("/sign-in");
  };

  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        console.log("logged in");
        if (response.data.user[0].role == "Applicant") {
          // cordaAccount(port, response.data.user[0].username);
          // shareAccount(port, response.data.user[0].username, "Admin");
          history.push("/client-dashboard");
        } else if (response.user.data[0].role == "Admin") {
          // cordaAccount(port, response.data.user[0].username);
          // shareAccount(port, response.data.user[0].username, "Applicant");
          // shareAccount(port, response.data.user[0].username, "Reviewer");
          history.push("/admin-dashboard");
        } else if (response.user.data[0].role == "Reviewer") {
          // cordaAccount(port, response.data.user[0].username);
          // shareAccount(port, response.data.user[0].username, "Admin");
          history.push("/reviewer-dashboard");
        }
      }
    });
  }, []);

  return (
    <div className={styles.signupContainer}>
      <form className={styles.form} onSubmit={signUp}>
        <label htmlFor="firstName">UserName:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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

        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <br></br>
      <div className={styles.signin}>
        Already have an account?{" "}
        <button>
          <Link to="/sign-in">Sign in</Link>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
