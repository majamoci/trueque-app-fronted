import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";

const MiUbicación = ({ setCenter, setMarker }) => {

  const findMe = () => {
    if (!navigator.geolocation) {
      alert("El navegador no soporta geolocalización");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (setCenter) {
          setCenter(latitude, longitude);
        }
        if (setMarker) {
          setMarker(
            latitude,
            longitude,
            "Mi ubicación",
            `lat: ${latitude}, lng: ${longitude}`
          );
        }
      },
      (error) => {
        alert("Error al obtener la ubicación");
      }
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={findMe}
          startIcon={<GpsFixedIcon />}
        >
          Localizarme
        </Button>
      </Grid>
    </Grid>
  );
};

export default MiUbicación;
