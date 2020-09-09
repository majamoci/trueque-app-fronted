// general
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
// material UI
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
// local
import ViewProducts from "./products/view";
import { useStyles } from "./shared/styles";

export default function Products() {
  const { path } = useRouteMatch();
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Fab
        component={Link}
        to={`${path}/nuevo`}
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>

      <ViewProducts />
    </Container>
  );
}
