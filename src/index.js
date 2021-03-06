import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import Favicon from "react-favicon";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Favicon url="https://img.icons8.com/bubbles/2x/brain.png" />
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
