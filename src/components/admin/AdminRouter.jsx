import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import AdminDashboard from "./Dashboard";
import AdminMenu from "./Actions";
import Account from "../dashboard/account";
import Users from "./Users";
import Map from "./Map/MapIndex";
import NavTabs from "./product-price/NavTabs";

//importo el componente de los tabs
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
        <Route exact path={`${path}/map`}>
          <Map />
        </Route>

        <Route exact path={`${path}/navTabs`}>
          <NavTabs />
        </Route>
  {/* aqui tambien necesito */}

        <Route path="*">
          <Redirect to={path} />
        </Route>
      </Switch>
    </TemplateAdmin>
  );
}