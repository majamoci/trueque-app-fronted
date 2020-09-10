import React, { useState, useEffect}from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import OfferCard from "./OfferCard";
import PublicationCard from "./PublicationCard";
import Map from "./../../../admin/Map/components/Map";

export default function FromOffer() {
  const { id } = useParams();
  const [lat, setLat] = useState('-1.3921655');
  const [lng, setLng] = useState("-78.5390282");

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
          <Grid container >
            <Grid item xs={12}>
                <Map
                    height="43vh"
                    width="100%"
                    center={[lat, lng]}
                    tileLayer={'map'} //dark,map
                    zoom={15}
                    apiKey="5XTmyrjnjZH3NCCR4VY5GDHGRh2GstoA"
                />
            </Grid>
         </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
