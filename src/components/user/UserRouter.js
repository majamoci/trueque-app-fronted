import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UDashboard from "./Dashboard";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import UserMenu from "./Actions";

export default function AdminRouter() {
  const { path } = useRouteMatch();
  return (
    <TemplateAdmin drawer={UserMenu}>
      <Switch>
        <Route exact path={`${path}/dashboard`}>
          <UDashboard />
        </Route>
      </Switch>
    </TemplateAdmin>
  );
}