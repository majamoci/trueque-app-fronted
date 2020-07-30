import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link, useRouteMatch } from "react-router-dom";
import ViewPub from "./view-pub";

export default function Publicaciones() {
  const { path } = useRouteMatch();

  return (
    <>
      
      {/* 👇 Aqui construimos las tabs  */}
      {/* 👇 este componente va a renderizar el grid + cards  */}
      {/* debemos reutilizarlo dentro de cada tab  */}
      {/* aprovechemos ese useRouteMatch que ya esta intanciado  */}
      <ViewPub type="borradores" />
      <Container maxWidth="xs" align="right">
        <Fab
          component={Link}
          to={`${path}/nueva`}
          color="primary"
          aria-label="add"
          //fixed          
          //right={spacing(2)}
        >     
             
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}
