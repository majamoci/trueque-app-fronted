import React from "react";
import { Switch, Route } from "react-router-dom";
import ADashboard from "./Dashboard";
import Users from "./Users";

export default function AdminRouter() {
  return (
    <Switch>
      <Route path="/dashboard">
        <ADashboard />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  );
}