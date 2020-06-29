import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import SignUp from "./auth/signUp";
import Template from "./dashboard/Template";
import SignIn from "./auth/singIn";
import RecoverPassword from "./auth/recoverPassword";
import { AuthRoute, LoginRequiredRoute } from "./shared/authenticated";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <h2>Hola, esta es la pagina principal</h2>
        <Link to="/login">Ingresar</Link>
      </Route>
      <AuthRoute path="/login" component={SignIn} />
      <AuthRoute path="/register" component={SignUp} />
      <Route path="/recoverpassword" component={RecoverPassword} />
      <LoginRequiredRoute path="*" component={Template} />
    </Switch>
  );
}