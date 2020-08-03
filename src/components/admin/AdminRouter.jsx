import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import AdminDashboard from "./Dashboard";
import AdminMenu from "./Actions";
import Account from "../dashboard/account";
import Users from "./Users";

export default function AdminRouter() {
  const { path } = useRouteMatch();
  return (
    <TemplateAdmin drawer={AdminMenu}>
      <Switch>
        <Route exact path={path}>
          <AdminDashboard />
        </Route>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
        <Route exact path={`${path}/account`}>
          <Account />
        </Route>
        <Route path="*">
          <Redirect to={path} />
        </Route>
      </Switch>
    </TemplateAdmin>
  );
}