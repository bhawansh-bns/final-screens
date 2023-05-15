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
    // axios
    //   .post(`https://localhost:${port}/createAccount/${accountName}`, {})
    //   .then((response) => {
    //     console.log(response);
    //     if (port == 8446) {
    //       shareAccount(port, accountName, "Applicant");
    //       shareAccount(port, accountName, "Reviewer");
    //     } else if (port == 8449 || port == 8443) {
    //       shareAccount(port, accountName, "Admin");
    //     }
    //   });
  };
  const shareAccount = (port, accountName, node) => {
    // axios
    //   .post(`https://localhost:${port}/shareAccount/${accountName}/${node}`, {})
    //   .then((response) => {
    //     console.log(response);
    //   });
  };
  const logIn = () => {
    history.push("/sign-in");
  };
  const signUp = () => {
    // axios
    //   .post("http://localhost:3001/register", {
    //     username: userName,
    //     password: password,
    //     email: email,
    //     role: role,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     if (role == "Applicant") {
    //       cordaAccount(8443, userName);
    //     } else if (role == "Admin") {
    //       cordaAccount(8446, userName);
    //     } else if (role == "Reviewer") {
    //       cordaAccount(8449, userName);
    //     }
    //     history.push("/sign-in");
    //   });

    history.push("/sign-in");
  };

  useEffect(() => {
    // axios.get("http://localhost:3001/login").then((response) => {
    //   if (response.data.loggedIn === true) {
    //     console.log("logged in");
    //     if (response.data.user[0].role == "Applicant") {
    //       // cordaAccount(port, response.data.user[0].username);
    //       // shareAccount(port, response.data.user[0].username, "Admin");
    //       history.push("/client-dashboard");
    //     } else if (response.user.data[0].role == "Admin") {
    //       // cordaAccount(port, response.data.user[0].username);
    //       // shareAccount(port, response.data.user[0].username, "Applicant");
    //       // shareAccount(port, response.data.user[0].username, "Reviewer");
    //       history.push("/admin-dashboard");
    //     } else if (response.user.data[0].role == "Reviewer") {
    //       // cordaAccount(port, response.data.user[0].username);
    //       // shareAccount(port, response.data.user[0].username, "Admin");
    //       history.push("/reviewer-dashboard");
    //     }
    //   }
    // });
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
        <div class="form-signin w-100 my-30">
          <div class="d-flex align-items-center text-white">
            {/* <svg
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
            </svg> */}
            <span class="fs-1 mx-auto">Sign up</span>
          </div>
          <div class="form-floating">
            <input
              class="form-control my-2"
              placeholder="Username"
              wfd-id="id0"
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="username">Username</label>
          </div>
          <div class="form-floating">
            <input
              class="form-control my-2"
              placeholder="name@example.com"
              wfd-id="id1"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email">Email</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control my-2"
              placeholder="Password"
              wfd-id="id2"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Password</label>
          </div>
          <div class="dropdown rounded-3  my-4">
            <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {role ? role : "Choose a role"}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" onClick={() => setRole("Applicant")}>
                  Applicant
                </a>
              </li>
              <li>
                <a class="dropdown-item" onClick={() => setRole("Admin")}>
                  Admin
                </a>
              </li>
              <li>
                <a class="dropdown-item" onClick={() => setRole("Reviewer")}>
                  Reviewer
                </a>
              </li>
            </ul>
          </div>

          <button class="w-100 btn btn-lg btn-dark" onClick={signUp}>
            Create Account
          </button>
          <div
            style={{
              //   position: "absolute",
              //   bottom: 0,
              //   right: 0,
              fontSize: "15px",
              fontStyle: "italic",
            }}
          >
            <p class="text-right mt-3 text-white pt-3">
              Already have an account?
            </p>
          </div>
          <button class="w-100 btn btn-lg btn-primary mb-3" onClick={logIn}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
