import Button from "../components/button/Button";
import { Link } from "react-router-dom";
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
    // axios
    //   .post("http://localhost:3001/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((response) => {
    //     if (response.data.message) {
    //       console.log(response.data.message);
    //     } else {
    //       console.log("logged in");
    //       console.log(response);
    //       if (response.data[0].role == "Applicant")
    //         history.push("/client-dashboard");
    //       else if (response.data[0].role == "Admin")
    //         history.push("/admin-dashboard");
    //       else if (response.data[0].role == "Reviewer")
    //         history.push("/reviewer-dashboard");
    //     }
    //   });
  };
  const newAccount = () => {
    history.push("/sign-up");
  };

  useEffect(() => {
    // axios.get("http://localhost:3001/login").then((response) => {
    //   if (response.data.loggedIn === true) {
    //     console.log("already logged in");
    //     if (response.data.user[0].role == "Applicant")
    //       history.push("/client-dashboard");
    //     else if (response.data.user[0].role == "Admin")
    //       history.push("/admin-dashboard");
    //     else if (response.data.user[0].role == "Reviewer")
    //       history.push("/reviewer-dashboard");
    //   }
    // });
  }, []);

  //   return (
  //     <div className="App">
  //       <div className="login">
  //         <h1>Login</h1>
  //         <input
  //           type="text"
  //           placeholder="Username..."
  //           onChange={(e) => {
  //             setUsername(e.target.value);
  //           }}
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password..."
  //           onChange={(e) => {
  //             setPassword(e.target.value);
  //           }}
  //         />
  //         <button onClick={login}> Login </button>
  //         <br />
  //         <button onClick={newAccount}> Create account </button>
  //       </div>
  //     </div>
  //   );
  // }

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
        <div class="form-signin w-100 my-30">
          <div class="d-flex align-items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-box-arrow-in-right mx-2 my-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
            <h2>Log in</h2>
          </div>
          <div class="form-floating">
            <input
              class="form-control my-2"
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
              class="form-control my-2"
              placeholder="Password"
              wfd-id="id1"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-dark my-3" onClick={login}>
            Sign in
          </button>
          <button
            class="w-100 btn btn-lg btn-primary my-3"
            onClick={newAccount}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
