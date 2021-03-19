import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import Favicon from "react-favicon";
import { BreakpointProvider } from "react-socks";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BreakpointProvider>
        <Favicon url="https://img.icons8.com/bubbles/2x/brain.png" />
        <AppRouter />
      </BreakpointProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
