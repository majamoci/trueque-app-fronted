import React from "react";
import BallotIcon from "@material-ui/icons/Ballot";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DrawerTemplate from "../dashboard/Drawer";

const menu = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <BallotIcon />,
    text: "Publicaciones",
    link: "/publicaciones",
  },
  {
    icon: <AccountBoxIcon />,
    text: "Cuenta",
    link: "/account",
  },
];

export default function UserMenu() {
  return <DrawerTemplate list={menu} />;
}

