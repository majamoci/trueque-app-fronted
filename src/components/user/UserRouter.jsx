import React from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import TemplateAdmin from "../dashboard/TemplateAdmin";
import UDashboard from "./Dashboard";
import Account from "../dashboard/account";
import Products from "./Products";
import NewProduct from "./products/new";
import EditProduct from "./products/edit";
import Publications from "./Publications";
import NewPub from "./publications/new";
import EditPub from "./publications/edit";
import UserMenu from "./Actions";
import Offers from "./Offers";

export default function AdminRouter() {
  const { path } = useRouteMatch();
  return (
    <TemplateAdmin drawer={UserMenu}>
      <Switch>
        <Route exact path={path}>
          <UDashboard />
        </Route>
        <Route exact path={`${path}/productos`}>
          <Products />
        </Route>
        <Route exact path={`${path}/productos/nuevo`}>
          <NewProduct />
        </Route>
        <Route exact path={`${path}/productos/:id`}>
          <EditProduct />
        </Route>
        <Route exact path={`${path}/publicaciones`}>
          <Publications />
        </Route>
        <Route exact path={`${path}/publicaciones/nueva`}>
          <NewPub />
        </Route>
        <Route exact path={`${path}/publicaciones/:id`}>
          <EditPub />
        </Route>
        <Route exact path={`${path}/ofertas`}>
          <Offers />
        </Route>
        <Route exact path={`${path}/ofertas/nueva`}>
          <NewPub />
        </Route>
        <Route exact path={`${path}/ofertas/:id`}>
          <EditPub />
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
