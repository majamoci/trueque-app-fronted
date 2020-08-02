import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { closeBackdrop as closeBAdmin } from "../redux/ducks/_login.duck";
import { closeBackdrop as closeBRegister } from "../redux/ducks/_register.duck";
import { NotFound } from "./shared/ViewError";
import AdminRouter from "./admin/AdminRouter";
import UserRouter from "./user/UserRouter";
import Register from "./auth/Register";
import ChangePw from "./auth/ChangePw";
import ResetPw from "./auth/ResetPw";
import Auth from "../utils";
import Login from "./auth/Login";
import Home from "./home";

function LoginRequiredRoute({ ...rest }) {
  const dispatch = useDispatch();

  return (
    <Route
      {...rest}
      render={(props) => {
        const auth = new Auth();
        switch (auth.role()) {
          case "U": {
            dispatch(closeBRegister(false));
            return <UserRouter />;
          }
          case "A": {
            dispatch(closeBAdmin(false));
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
