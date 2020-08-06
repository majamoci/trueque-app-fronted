// general
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// material ui
import MainRouter from "./components/MainRouter";
import { ThemeProvider } from "@material-ui/core";
// local
import { theme } from "./components/shared/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
