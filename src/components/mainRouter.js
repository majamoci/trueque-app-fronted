import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { NotFound } from "./shared/ViewError";
import AdminRouter from "./admin/AdminRouter";
import UserRouter from "./user/UserRouter";
import Register from "./auth/Register";
import ChangePw from "./auth/ChangePw";
import ResetPw from "./auth/ResetPw";
import Auth from "./shared/utils";
import Login from "./auth/Login";

const LoginRequiredRoute = ({ ...rest }) => (
  <Route
  {...rest}
  render={(props) => {
      const auth = new Auth();
      switch (auth.role()) {
        case "U": {
          return <UserRouter />;
        }
        case "A": {
          return <AdminRouter />;
        }
        default: {
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
      <LoginRequiredRoute path="/admin" />;
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

LoginRequiredRoute.propTypes = {
  rest: PropTypes.object,
};
