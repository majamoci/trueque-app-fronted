import React from "react";
import { Switch, Route } from "react-router-dom";
import UDashboard from "./Dashboard";

export default function UserRouter() {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <UDashboard />
      </Route>
      {/* <Route path="/dashboard">
        <h2>Users</h2>
      </Route> */}
    </Switch>
  );
}