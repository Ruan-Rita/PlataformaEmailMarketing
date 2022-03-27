import React from "react";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Routes from "./routes";
import { Theme } from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
