import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import DashboardBar from "./AppBar";
import AdminRouter from "../admin/AdminRouter";
import UserRouter from "../user/UserRouter";
import { Container, Box } from "@material-ui/core";
import Copyright from "../shared/copyright";
import { useStyles } from "./styles";

const RequiredRoutes = () => {
  const local = "AUTH" in localStorage;
  const session = "AUTH" in sessionStorage;
  if (local || session) {
    const auth = local
      ? localStorage.getItem("AUTH")
      : sessionStorage.getItem("AUTH");
    const role = auth.charAt(auth.length - 1);

    return role === "A" ? <AdminRouter /> : <UserRouter />;
  } else {
    // no esta logueado
  }
};

export default function Template({ match }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardBar />
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
