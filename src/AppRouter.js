import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home.index()}>
          <Home />
        </Route>
        <Route exact path={routes.tests.index()}>
          <Tests />
        </Route>
        <Route exact path={routes.auth.register()}>
          <UserInfo />
        </Route>
      </Switch>
    </Router>
  );
}
