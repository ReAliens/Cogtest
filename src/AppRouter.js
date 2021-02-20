import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";

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
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
