import React from "react";
import { Switch, Route } from "react-router-dom";
import ADashboard from "./Dashboard";

export default function AdminRouter() {
  return (
    <Switch>
      <Route path="/dashboard">
        <ADashboard />
      </Route>
      <Route path="/users">
        <h2>Users 2</h2>
      </Route>
    </Switch>
  );
}