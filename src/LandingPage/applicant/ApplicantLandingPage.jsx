import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
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
    //       setLoginStatus(response.data.message);
    //     } else {
    //       setLoginStatus(response.data[0].username);
    //       history.push("/client-dashboard");
    //     }
    //   });
  };
  const newAccount = () => {
    history.push("/sign-up");
  };

  useEffect(() => {
    // axios.get("http://localhost:3001/login").then((response) => {
    //   if (response.data.loggedIn === true) {
    //     setLoginStatus(response.data.user[0].username);
    //   }
    // });
  }, []);

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
        <br />
        <button onClick={newAccount}> Create account </button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}
