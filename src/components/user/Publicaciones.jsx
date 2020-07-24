import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import ViewPub from "./view-pub";

export default function Publicaciones() {
  const { path } = useRouteMatch();

  return (
    <>
      <Container maxWidth="xs">
        <Button
          component={Link}
          to={`${path}/nueva`}
          variant="contained"
          color="primary"
        >
          Nueva Publicación
        </Button>
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
