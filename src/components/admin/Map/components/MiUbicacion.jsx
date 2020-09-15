import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import NewLocation from "./button/NewLocation";
import fetchCreateLocation from "redux/actions/locations/create.action";

const initial_form = {
  lat: 0,
  lng: 0,
};

const MiUbicación = ({ setCenter, setMarker }) => {
  const dispatch = useDispatch();
  const handleSubmit = (formData) => {
    dispatch(fetchCreateLocation(formData));
  };

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
        console.log(position);
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
      <Grid item xs={6}>
        <NewLocation onSubmit={handleSubmit} values={initial_form} />
      </Grid>
    </Grid>
  );
};

export default MiUbicación;
