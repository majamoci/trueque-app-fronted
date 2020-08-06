// general
import clsx from "clsx";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// material UI
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
// local
import { useStyles } from "./styles";
import AccountMenu from "./AccountMenu";
import { openDrawer } from "redux/actions/drawer.action";

export default function DashboardBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerSt = useSelector((state) => state.auth.drawer);

  const handleDrawerOpen = () => {
    dispatch(openDrawer(true));
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, drawerSt.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            drawerSt.open && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Ranti Ranti
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
}
