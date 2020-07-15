import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import ADashboard from "./Dashboard";
import AdminMenu from "./Actions";
import Users from "./Users";

export default function AdminRouter() {
  const { path } = useRouteMatch();
  return (
    <TemplateAdmin drawer={AdminMenu}>
      <Switch>
        <Route exact path={path}>
          <ADashboard />
        </Route>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
        <Route path="*">
          <Redirect to={path} />
        </Route>
      </Switch>
    </TemplateAdmin>
  );
}