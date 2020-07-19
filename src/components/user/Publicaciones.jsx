import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

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
    </>
  );
}
