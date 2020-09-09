import React from "react";
import BallotIcon from "@material-ui/icons/Ballot";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import DrawerTemplate from "../dashboard/Drawer";

const menu = [
  {
    icon: <DashboardIcon />,
    text: "Dashboard",
    link: "/",
  },
  {
    icon: <ShoppingBasketIcon />,
    text: "Productos",
    link: "/productos",
  },
  {
    icon: <BallotIcon />,
    text: "Publicaciones",
    link: "/publicaciones",
  },
  {
    icon: <ShoppingCartIcon />,
    text: "Ofertas e Intercambios",
    link: "/ofertas",
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
