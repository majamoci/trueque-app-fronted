import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BallotIcon from '@material-ui/icons/Ballot';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DrawerTemplate from "../dashboard/Drawer";

const menu = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <BallotIcon/>,
    text: "Publicaciones",
    link: "/publicaciones",

  },
  {
    icon: <AccountBoxIcon/>,
    text: "Cuenta",
    link: "/Account",

  }
];

export default function UserMenu() {
  return <DrawerTemplate list={menu} />;
}

