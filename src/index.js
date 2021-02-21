import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import AppRouter from "./AppRouter";

ReactDOM.render(
  <Flex h="100vh" bg="#003374">
    <React.StrictMode>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </React.StrictMode>
  </Flex>,
  document.getElementById("root")
);
reportWebVitals();
