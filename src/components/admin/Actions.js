import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DrawerTemplate from "../dashboard/Drawer";

const menu = [
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

export default function AdminMenu() {
  return <DrawerTemplate list={menu} />;
}
