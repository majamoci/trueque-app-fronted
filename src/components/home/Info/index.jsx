// general
import React from "react";
import { Link } from "react-router-dom";
// material ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles";
// local

export default function InfoPlatform() {
const classes = useStyles();

  return (
    <div className={classes.info}>
      <img src="rantiLogo.png" alt="Ranti Ranti Logo" className={classes.logo} />
      <p>
        La red de intercambio en la que puedes comprar pagando con tus productos.
      </p>
      <Typography component="h1" variant="h4">
        ¿Cómo funciona?
      </Typography>
      <ol>
        <li>Crea tu cuenta</li>
        <li>Busca el producto</li>
        <li>Truequéalo</li>
      </ol>
      <Button className={classes.button} component={Link} to="/login">
        Iniciar Sesión
      </Button>
      <Button component={Link} to="/register">
        Registrarse
      </Button>
    </div>
  );
}
