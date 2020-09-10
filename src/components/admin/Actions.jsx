import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DrawerTemplate from "../dashboard/Drawer";
import BarChartIcon from '@material-ui/icons/BarChart';

const menu = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <PeopleIcon />,
    text: "Usuarios",
    link: "/users",
  },
  {
    icon: <AccountBoxIcon />,
    text: "Cuenta",
    link: "/account",
  },

  {
    icon: <BarChartIcon />,
    text: "Datos",
    link: "/navTabs",
  },
  

];

export default function AdminMenu() {
  return <DrawerTemplate list={menu} />;
}
