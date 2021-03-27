import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";
import Header from "./components/appHeader";
import Footer from "./components/footer";
import useSettings from "./hooks/useSettings";
import { Flex } from "@chakra-ui/react";
import UserInfoProvider from "./contexts/userContext";
import Loader from "./components/Loader";

export default function AppRouter() {
  const { settings, settingsLoading } = useSettings();
  return (
    <UserInfoProvider>
      <Flex alignItems="center" margin="auto" flexDir="column">
        {settingsLoading === true ? (
          <Loader />
        ) : (
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            marginX="100px"
          >
            <Flex w="100%" marginY="15px" justifyContent="flex-end">
              <Header headerImage={settings?.payload?.logo} />
            </Flex>
            <Router>
              <Switch>
                <Route exact path={routes.home.index()}>
                  <Home
                    ending={settings?.payload?.text4}
                    header={settings?.payload?.title}
                    welcome={settings?.payload?.text1}
                    intro={settings?.payload?.text2}
                    tip={settings?.payload?.text3}
                    signature={settings?.payload?.text5}
                    title={settings?.message}
                    email={settings?.payload?.email}
                  />
                </Route>
                <Route exact path={routes.auth.register()}>
                  <UserInfo />
                </Route>
                <Route path={routes.tests.index()}>
                  <Tests />
                </Route>
              </Switch>
            </Router>
            <Flex w="100%" alignItems="center" justifyContent="center">
              <a href="https://devnile.com/" target="_blank" rel="noreferrer">
                <Footer copyRignt={settings?.payload?.copyright} />
              </a>
            </Flex>
          </Flex>
        )}
      </Flex>
    </UserInfoProvider>
  );
}
