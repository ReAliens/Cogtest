import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import Tests from "./pages/tests";
import Home from "./pages/home";
import UserInfo from "./pages/tests/UserInfo";
import Header from "./components/appHeader";
import Footer from "./components/footer";
import useSettings from "./hooks/useSettings";
import { Flex, IconButton } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
} from "react-icons/fa";
import UserInfoProvider from "./contexts/userContext";
import Loader from "./components/Loader";
import { useCurrentBreakpointName } from "react-socks";

export default function AppRouter() {
  const { settings, settingsLoading } = useSettings();
  const breakPointName = useCurrentBreakpointName();
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
              <Flex minW="100%" justifyContent="space-between" marginTop="10px">
                <Flex>
                  {settings?.payload?.facebook && (
                    <a
                      href={`${settings?.payload?.facebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        as={FaFacebookF}
                        size={
                          breakPointName === "small" ||
                          breakPointName === "xsmall"
                            ? "sm"
                            : "md"
                        }
                        color="blue.500"
                        rounded="full"
                        cursor="pointer"
                        padding="5px"
                        margin="5px"
                      />
                    </a>
                  )}
                  {settings?.payload?.youtube && (
                    <a
                      href={`${settings?.payload?.youtube}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        padding="5px"
                        as={FaYoutube}
                        color="red.500"
                        size={
                          breakPointName === "small" ||
                          breakPointName === "xsmall"
                            ? "sm"
                            : "md"
                        }
                        rounded="full"
                        cursor="pointer"
                        margin="5px"
                      />
                    </a>
                  )}
                  {settings?.payload?.linkedin && (
                    <a
                      href={`${settings?.payload?.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        as={FaLinkedin}
                        size={
                          breakPointName === "small" ||
                          breakPointName === "xsmall"
                            ? "sm"
                            : "md"
                        }
                        color="blue.500"
                        padding="5px"
                        rounded="full"
                        cursor="pointer"
                        margin="5px"
                      />
                    </a>
                  )}
                  {settings?.payload?.instagram && (
                    <a
                      href={`${settings?.payload?.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        as={FaInstagram}
                        padding="5px"
                        size={
                          breakPointName === "small" ||
                          breakPointName === "xsmall"
                            ? "sm"
                            : "md"
                        }
                        color="#fb3958"
                        rounded="full"
                        cursor="pointer"
                        margin="5px"
                      />
                    </a>
                  )}
                  {settings?.payload?.whatsapp && (
                    <a
                      href={`${settings?.payload?.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        as={FaWhatsapp}
                        size={
                          breakPointName === "small" ||
                          breakPointName === "xsmall"
                            ? "sm"
                            : "md"
                        }
                        padding="5px"
                        rounded="full"
                        color="whatsapp.600"
                        cursor="pointer"
                        margin="5px"
                      />
                    </a>
                  )}
                  {settings?.payload?.snapchat && (
                    <a
                      href={`${settings?.payload?.snapchat}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconButton
                        as={FaSnapchat}
                        size={
                          breakPointName === "small" ||
                          breakPointName === "xsmall"
                            ? "sm"
                            : "md"
                        }
                        rounded="full"
                        padding="5px"
                        color="yellow.400"
                        cursor="pointer"
                        margin="5px"
                      />
                    </a>
                  )}
                </Flex>
                <Flex>
                  <Footer copyRignt={settings?.payload?.copyright} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </UserInfoProvider>
  );
}
