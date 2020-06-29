import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRouter from "./components/mainRouter";


function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
