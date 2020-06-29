import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountMenu from "./AccountMenu";
import { useSelector, useDispatch } from "react-redux";
import { openDrawer } from "../../redux/actions/drawer.action";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function DashboardBar() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const drawerStore = useSelector((state) => state.drawer);

  const handleDrawerOpen = () => {
    dispatch(openDrawer(true));
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, drawerStore.open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            drawerStore.open && classes.menuButtonHidden
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
