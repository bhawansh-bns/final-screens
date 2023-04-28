import Button from "../components/button/Button";
import styles from "../SignInPage/SignInPageStyles.module.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
    <div>
      <label>Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}> Login </button>
      <br /> <br />
      <button onClick={newAccount}>Create Account</button>
    </div>
  );
}
