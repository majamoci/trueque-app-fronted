import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

export default function ViewOffers() {
  const classes = useStyles();

  return (
    <>
      <Typography component="h1" variant="h4">
        Revisar Ofertas
      </Typography>
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Paper key={item} className={classes.paper}>
          Usuario_#42 esta ofertando
          <br></br>
          producto_1 = producto_2
        </Paper>
      ))}
    </>
  );
}
