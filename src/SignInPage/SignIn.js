import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styles from "./SignInPageStyles.module.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  axios.defaults.withCredentials = true;

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message);
        } else {
          console.log("logged in");
          console.log(response);
          if (response.data[0].role == "Applicant")
            history.push("/client-dashboard");
          else if (response.data[0].role == "Admin")
            history.push("/admin-dashboard");
          else if (response.data[0].role == "Reviewer")
            history.push("/reviewer-dashboard");
        }
      });
  };
  const newAccount = () => {
    history.push("/sign-up");
  };

  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        console.log("already logged in");
        if (response.data.user[0].role == "Applicant")
          history.push("/client-dashboard");
        else if (response.data.user[0].role == "Admin")
          history.push("/admin-dashboard");
        else if (response.data.user[0].role == "Reviewer")
          history.push("/reviewer-dashboard");
      }
    });
  }, []);

  return (
    <div class={styles.gradient_background}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <div className="form-signin w-100 my-30">
          <div className="d-flex align-items-center text-white">
            <span className="fs-1 mx-auto">Log in</span>
          </div>
          <div className="form-floating">
            <input
              className="form-control my-2"
              placeholder="name@example.com"
              wfd-id="id0"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="username">Username</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              className="form-control my-2"
              placeholder="Password"
              wfd-id="id1"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-dark my-3" onClick={login}>
            Sign in
          </button>
          <button
            className="w-100 btn btn-lg btn-primary my-3"
            onClick={newAccount}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
