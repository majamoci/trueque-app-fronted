import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link, useRouteMatch } from "react-router-dom";
import ViewPub from "./view-pub";

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
      <Container maxWidth="xs">
        <Fab
          component={Link}
          to={`${path}/nueva`}
          color="primary"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </Container>
      {/* 👇 Aqui construimos las tabs  */}
      {/* 👇 este componente va a renderizar el grid + cards  */}
      {/* debemos reutilizarlo dentro de cada tab  */}
      {/* aprovechemos ese useRouteMatch que ya esta instanciado  */}
      {/* en la prop type, iria la tab que queremos que se cargue */}
      <ViewPub type="borradores" />
    </>
  );
}
