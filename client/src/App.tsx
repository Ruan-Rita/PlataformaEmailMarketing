import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Routes from "./routes";
import { Theme } from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
