import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignIn from "./components/auth/singIn";
import SignUp from './components/auth/signUp';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <h2>Hola, esta es la pagina principal</h2>
            <Link to="/login">Ingresar</Link>
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; //exportamos para poder utilizar en react
