import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
  },
}));

export default function GridPub({ data }) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} md={3}>
          {/* Aqui debes llamar a la tarjeta (debe estar en un archivo aparte) */}
          {/* solo la llamas aqui, no te olvides de eliminar los comentarios */}
          <img src={item.img} alt={item.titulo} className={classes.img} />
          <p>{item.titulo}</p>
          <p>{item.category}</p>
          {item.button}
        </Grid>
      ))}
    </Grid>
  );
}
