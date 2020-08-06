import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import UDashboard from "./Dashboard";
import Publicaciones from "./Publicaciones";
import Account from "../dashboard/account";
import NewPub from "./new-pub";
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
          <Publicaciones />
        </Route>
        <Route exact path={`${path}/publicaciones/nueva`}>
          <NewPub />
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
