import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";
import Header from "./components/appHeader";
import Footer from "./components/footer";
import axios from "axios";

// axios.get("https://cogtests.com/api/settings").then((res) => {
//   console.log(res.data);
// });

const test = async () => {
  const hamada = await axios.get("https://cogtests.com/api/cogtests");
  console.log(hamada.data);
};

test();

// const id =

// axios.get(`https://cogtests.com/api/get-questions/${id}`);

export default function AppRouter() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path={routes.home.index()}>
            <Home />
          </Route>
          <Route path={routes.tests.index()}>
            <Tests />
          </Route>
          <Route exact path={routes.auth.register()}>
            <UserInfo />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
