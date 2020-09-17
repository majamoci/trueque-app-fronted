import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import OfferCard from "./OfferCard";
import PublicationCard from "./PublicationCard";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "utils";
import fetchLocation from "redux/actions/locations/location.action";

export default function FromOffer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const locationSt = useSelector((store) => store.loc.location.data);
  const [latlng, setLatLng] = useState([]);

  useEffect(() => {
    dispatch(fetchLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isEmpty(locationSt)) {
      // setLatLng([locationSt.locations.lat, locationSt.locations.lng]);
      setLatLng([
        parseFloat(locationSt.locations.lat),
        parseFloat(locationSt.locations.lng),
      ]);
    }
  }, [locationSt]);

  return (
    !isEmpty(latlng) && (
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
            <Grid container>
              <Grid item xs={12}>
                <Map
                  height="43vh"
                  width="100%"
                  center={latlng}
                  tileLayer={"map"} //dark,map
                  zoom={15}
                  apiKey="5XTmyrjnjZH3NCCR4VY5GDHGRh2GstoA"
                />
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={findMe}
                  startIcon={<SyncAltIcon />}
                >
                  Ofertar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  );
}
