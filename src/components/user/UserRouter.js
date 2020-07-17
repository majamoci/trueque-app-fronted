import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import UDashboard from "./Dashboard";
import UPublicaciones from "./Publicaciones";
import UserMenu from "./Actions";

export default function AdminRouter() {
  const { path } = useRouteMatch();
  return (
    <TemplateAdmin drawer={UserMenu}>
      <Switch>
        <Route exact path={path}>
          <UDashboard />
        </Route>
        <Route exact path={`${path}/publicaciones`}>
          <UPublicaciones />
        </Route>
        <Route path="*">
          <Redirect to={path} />
        </Route>
      </Switch>
    </TemplateAdmin>
  );
}