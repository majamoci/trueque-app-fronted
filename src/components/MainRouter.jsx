// general
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
// material ui
// local
import Home from "./home";
import Auth from "../utils";
import Login from "./auth/Login";
import ResetPw from "./auth/ResetPw";
import ChangePw from "./auth/ChangePw";
import Register from "./auth/Register";
import UserRouter from "./user/UserRouter";
import { NotFound } from "./shared/ViewError";
import AdminRouter from "./admin/AdminRouter";
import { closeBackdrop } from "../redux/ducks/_login.duck";

function LoginRequiredRoute({ ...rest }) {
  const dispatch = useDispatch();

  return (
    <Route
      {...rest}
      render={(props) => {
        const auth = new Auth();
        dispatch(closeBackdrop(false));
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
}

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
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

LoginRequiredRoute.defaultProps = {
  rest: {},
};
