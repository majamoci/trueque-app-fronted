import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResetPw from "./auth/ResetPw";
import ChangePw from "./auth/ChangePw";
import AdminRouter from "./admin/AdminRouter";
import UserRouter from "./user/UserRouter";
import { role } from "./shared/utils";

const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      switch (role()) {
        case "U":
        case "A": {
          return <Component {...props} />;
        }
        default: {
          // no logueado
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }
    }}
  />
);

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
      <LoginRequiredRoute path="/user" component={UserRouter} />
      <LoginRequiredRoute path="/admin" component={AdminRouter} />
    </Switch>
  );
}
