import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import SignUp from "./auth/signUp";
import Dashboard from "./dashboard/dashboard";
import SignIn from "./auth/singIn";
import RecoverPassword from "./auth/recoverPassword";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <h2>Hola, esta es la pagina principal</h2>
        <Link to="/login">Ingresar</Link>
      </Route>
      <AuthRoute path="/login" component={SignIn} />
      <AuthRoute path="/register" component={SignUp} />
      <LoginRequiredRoute component={Dashboard} />
      <Route path="/recoverpassword" component={RecoverPassword} />
    </Switch>
  );
}

const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      "ACCESS_TOKEN" in sessionStorage ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      "ACCESS_TOKEN" in sessionStorage ? (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: {
              from: props.location,
            },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);
