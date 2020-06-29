import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardBar from "./AppBar";
import DrawerTemplate from "./Drawer";
import { areRoles, getAdminRole, getUserRole } from "../shared/authenticated";
import AdminRouter from "../admin/AdminRouter";
import UserRouter from "../user/UserRouter";
import { Container, Box } from "@material-ui/core";
import Copyright from "../shared/copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const RequiredRoutes = (match) => {
  if (areRoles() && getAdminRole() === "ADMIN")
    return <AdminRouter />;
  else if (areRoles() && getUserRole() === "USER")
    return <UserRouter />;
};

export default function Template({ match }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardBar />
      <DrawerTemplate />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>
            <RequiredRoutes />
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}