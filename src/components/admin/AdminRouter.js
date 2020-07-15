import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ADashboard from "./Dashboard";
import Users from "./Users";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import AdminMenu from "./Actions";

export default function AdminRouter() {
  const { path } = useRouteMatch();
  return (
    <TemplateAdmin drawer={AdminMenu}>
      <Switch>
        <Route exact path={`${path}/dashboard`}>
          <ADashboard />
        </Route>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
      </Switch>
    </TemplateAdmin>
  );
}