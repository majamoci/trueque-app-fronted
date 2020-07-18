import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BallotIcon from '@material-ui/icons/Ballot';
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

  }
];

export default function UserMenu() {
  return <DrawerTemplate list={menu} />;
}

