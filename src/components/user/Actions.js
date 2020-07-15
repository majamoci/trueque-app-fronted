import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DrawerTemplate from "../dashboard/Drawer";

const menu = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/dashboard",
  },
];

export default function UserMenu() {
  return <DrawerTemplate list={menu} />;
}

