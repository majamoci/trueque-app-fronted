import React from "react";
import clsx from "clsx";
import { Drawer, makeStyles, IconButton, Divider } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { closeDrawer } from "../../redux/actions/drawer.action";
import { areRoles, getAdminRole, getUserRole } from "../shared/authenticated";
import MenuList from "../shared/ListItems";
import { AdminMenu } from "../admin/Actions";
import { UserMenu } from "../user/Actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

const ListLinks = () => {
  if (areRoles() && getAdminRole() === "ADMIN")
    return <MenuList list={AdminMenu} />;
  else if (areRoles() && getUserRole() === "USER")
    return <MenuList list={UserMenu} />;
};

export default function DrawerTemplate() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerStore = useSelector((state) => state.drawer);

  const handleDrawerClose = () => {
    dispatch(closeDrawer(false));
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !drawerStore.open && classes.drawerPaperClose
        ),
      }}
      open={drawerStore.open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <ListLinks />
      <Divider />
    </Drawer>
  );
}