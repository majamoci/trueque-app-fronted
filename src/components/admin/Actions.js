import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

export const AdminMenu = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <PeopleIcon />,
    text: "Usuarios",
    link: "/users",
  },
];
