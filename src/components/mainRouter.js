import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Template from "./dashboard/Template";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResetPw from "./auth/ResetPw";
import ChangePw from "./auth/ChangePw";
import { LoginRequiredRoute } from "./shared/authenticated";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <h2>Hola, esta es la pagina principal</h2>
        <Link to="/login">Ingresar</Link>
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/reset-password" component={ResetPw} />
      <Route path="/change-password" component={ChangePw} />
      <LoginRequiredRoute path="*" component={Template} />
    </Switch>
  );
}
