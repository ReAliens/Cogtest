import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";
import Header from "./components/appHeader";
import Footer from "./components/footer";
import useSettings from "./hooks/useSettings";
import { Flex, IconButton, Spinner } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
} from "react-icons/fa";
import UserInfoProvider from "./contexts/userContext";

export default function AppRouter() {
  const { settings, settingsLoading } = useSettings();
  return (
    <UserInfoProvider>
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
            <Flex w="100%" alignItems="center" justifyContent="space-between">
              <Flex>
                <IconButton
                  as={FaFacebookF}
                  size="xs"
                  rounded="full"
                  background="blue.400"
                  cursor="pointer"
                  marginRight="5px"
                />
                <IconButton
                  as={FaYoutube}
                  size="xs"
                  rounded="full"
                  background="blue.400"
                  cursor="pointer"
                  marginRight="5px"
                />
                <IconButton
                  as={FaLinkedin}
                  size="xs"
                  rounded="full"
                  background="blue.400"
                  cursor="pointer"
                  marginRight="5px"
                />
                <IconButton
                  as={FaInstagram}
                  size="xs"
                  rounded="full"
                  background="blue.400"
                  cursor="pointer"
                  marginRight="5px"
                />
                <IconButton
                  as={FaWhatsapp}
                  size="xs"
                  rounded="full"
                  background="blue.400"
                  cursor="pointer"
                  marginRight="5px"
                />
                <IconButton
                  as={FaSnapchat}
                  size="xs"
                  rounded="full"
                  background="blue.400"
                  cursor="pointer"
                  marginRight="5px"
                />
              </Flex>
              <Flex>
                <Footer copyRignt={settings?.payload?.copyright} />
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </UserInfoProvider>
  );
}
