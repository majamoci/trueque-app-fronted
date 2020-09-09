import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import OfferCard from "./OfferCard";
import PublicationCard from "./PublicationCard";

export default function FromOffer() {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h3" component="h1">
        Selecciona uno de los productos a intercambiar
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          Tu Oferta
          <OfferCard id={id} />
          Intercambio
          <PublicationCard id={id} />
        </Grid>
        <Grid item xs={12} md={8}>
          Mapa de Productos
        </Grid>
      </Grid>
    </div>
  );
}
