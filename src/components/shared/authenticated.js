import React from "react";
import { Route, Redirect } from "react-router-dom";

// FIXME: convertir las funciones en variables

export const isAuth = () => {
  return "ACCESS_TOKEN" in sessionStorage;
};

export const token = () => {
  return sessionStorage.getItem('ACCESS_TOKEN');
};

export const areRoles = () => {
  return "ROLES" in sessionStorage;
};

export const getRoles = () => {
  return JSON.parse(sessionStorage.getItem("ROLES"));
};

export const getAdminRole = () => {
  return getRoles().find((el) => el === "ADMIN");
};

export const getUserRole = () => {
  return getRoles().find((el) => el === "USER");
};

export const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
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

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
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

export const AdminList = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export const UserList = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};
