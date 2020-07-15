import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Box } from "@material-ui/core";
import Copyright from "../shared/copyright";
import DashboardBar from "./AppBar";
import { useStyles } from "./styles";

export default function TemplateAdmin({ children, drawer: Drawer }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardBar />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box pt={4}>
            {children}
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

TemplateAdmin.propTypes = {
  children: PropTypes.node.isRequired,
  drawer: PropTypes.elementType,
};
