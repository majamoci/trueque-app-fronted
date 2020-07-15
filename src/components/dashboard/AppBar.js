import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { openDrawer } from "../../redux/actions/drawer.action";
import AccountMenu from "./AccountMenu";
import { useStyles } from "./styles";

export default function DashboardBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerSt = useSelector((state) => state.drawer);

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
          Dashboard
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
