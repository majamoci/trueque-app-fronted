import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import { Link, useRouteMatch } from "react-router-dom";
import TabActive from "./view-pub";
import { useStyles } from "./shared/styles";


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
