import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";
import Header from "./components/appHeader";
import Footer from "./components/footer";
import useSettings from "./hooks/useSettings";
import { Flex, Spinner } from "@chakra-ui/react";

export default function AppRouter() {
  const { settings, settingsLoading } = useSettings();
  return (
    <Flex alignItems="center" margin="auto" flexDir="column">
      {settingsLoading === true ? (
        <Spinner
          marginTop="20%"
          height="200px"
          width="200px"
          color="red.500"
          thickness="4px"
          speed="0.9s"
          emptyColor="gray.200"
        />
      ) : (
        <>
          <Flex
            justifyContent="center"
            marginRight="680px"
            marginBottom="20px"
            marginTop="20px"
            alignItems="center"
            h="10vh"
            w="100%"
          >
            <Header headerImage={settings?.payload?.logo} />
          </Flex>
          <Flex margin="auto">
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
                  />
                </Route>
                <Route path={routes.tests.index()}>
                  <Tests />
                </Route>
                <Route exact path={routes.auth.register()}>
                  <UserInfo />
                </Route>
              </Switch>
            </Router>
          </Flex>
          <Flex h="10vh" pos="fixed" bottom="0" margin="auto">
            <Footer copyRignt={settings?.payload?.copyright} />
          </Flex>
        </>
      )}
    </Flex>
  );
}
