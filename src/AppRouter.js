import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";
import Header from "./components/appHeader";
import Footer from "./components/footer";
import useSettings from "./hooks/useSettings";
import { Flex, Grid } from "@chakra-ui/react";

export default function AppRouter() {
  const { settings } = useSettings();
  return (
    <>
      <Grid alignItems="center" dir="rtl" h="100%" templateRows="1fr 5fr 1fr">
        <Flex alignItems="center" w="50%" dir="rtl">
          <Header headerImage={settings?.payload?.logo} />
        </Flex>
        <Flex margin="auto" paddingBottom="40px">
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
        <Flex marginTop="50px" pos="fixed" bottom="0" margin="auto">
          <Footer copyRignt={settings?.payload?.copyright} />
        </Flex>
      </Grid>
    </>
  );
}
