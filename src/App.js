import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from "./SignUpPage/SignUpPage";
import SignInPage from "./SignInPage/SignInPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;

