import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link, useRouteMatch } from "react-router-dom";
import TabActive from "./view-pub";

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  }
}))

export default function Publicaciones() {
  const { path } = useRouteMatch();
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Fab
          component={Link}
          to={`${path}/nueva`}
          color="primary"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>

        <TabActive />
      </Container>
    </>
  );
}
