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
          <>
            <Flex>
              <Header headerImage={settings?.payload?.logo} />
            </Flex>
            <Flex>
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
            </Flex>
            <Flex>
              {/* {platforms?.map((platform) => (
              <SocialIconButton
                key={platform}
                platform={platform}
                onClick={() => {}}
                // isActive={selectedPlatforms?.includes(platform)}
              />
            ))} */}
              <IconButton
                as={FaFacebookF}
                size="xs"
                rounded="full"
                background="blue.400"
                cursor="pointer"
              />
              <IconButton
                as={FaYoutube}
                size="xs"
                rounded="full"
                background="blue.400"
                cursor="pointer"
              />
              <IconButton
                as={FaLinkedin}
                size="xs"
                rounded="full"
                background="blue.400"
                cursor="pointer"
              />
              <IconButton
                as={FaInstagram}
                size="xs"
                rounded="full"
                background="blue.400"
                cursor="pointer"
              />
              <IconButton
                as={FaWhatsapp}
                size="xs"
                rounded="full"
                background="blue.400"
                cursor="pointer"
              />
              <IconButton
                as={FaSnapchat}
                size="xs"
                rounded="full"
                background="blue.400"
                cursor="pointer"
              />
              <Footer copyRignt={settings?.payload?.copyright} />
            </Flex>
          </>
        )}
      </Flex>
    </UserInfoProvider>
  );
}
