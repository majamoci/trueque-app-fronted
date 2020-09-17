import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Map from "./components/Map";
import MiUbicacion from "./components/MiUbicacion";
import Busqueda from "./components/Busqueda";
import Alert from "@material-ui/lab/Alert";
import fetchLocations from "redux/actions/locations/location.action";
import { isEmpty } from "utils";
import { FormGroup } from "@material-ui/core";
import NewLocation from "./components/button/NewLocation";
import fetchCreateLocation from "redux/actions/locations/create.action";

const initial_form = {
  lat: 0,
  lng: 0,
};

function MapIndex() {
  //Estado del componente
  const dispatch = useDispatch();
  const locationSt = useSelector((store) => store.loc.location.data);
  const [lat, setLat] = useState("-1.3921655");
  const [lng, setLng] = useState("-78.5390282");
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    //TODO Guardar datos del usuario en memoria
    dispatch(fetchLocations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fijar en el centro del mapa
  const setCenter = (lat, lng) => {
    setLat(lat);
    setLng(lng);

    window.L.mapquest.Map.getMap("map").setView(
      new window.L.LatLng(lat, lng),
      15
    );
  };

  const addMarker = (lat, lng, title, subtitle) => {
    const marker = window.L.mapquest
      .textMarker(new window.L.LatLng(lat, lng), {
        text: title || "",
        subtitle: subtitle || "",
        position: "right",
        type: "marker",
        icon: {
          primaryColor: "#FFC612",
          secondaryColor: "#D21000",
          size: "md",
        },
      })
      .addTo(window.L.mapquest.Map.getMap("map"));

    // cambiamos los valores de lat lng
    setLat(lat);
    setLng(lng);

    const copyMarkers = markers.slice(0);
    copyMarkers.splice(0, 0, marker); //push(marker);
    setMarkers(copyMarkers);
  };

  const clearMarkers = () => {
    markers.forEach((marker) => {
      window.L.mapquest.Map.getMap("map").removeLayer(marker);
    });
    //limpiamos state
    setMarkers([]);
  };

  const handleSubmit = (formData) => {
    dispatch(fetchCreateLocation({ lat, lng }));
  };

  return (
    !isEmpty(locationSt) && (
      <div>
        <h2>Escoja su dirección en el mapa</h2>
        <Alert severity="info">
          Esta ubicación será la que se utilizará para todas las publicaciones
        </Alert>
        <div>
          Latitud: {lat}
          Longitud: {lng}
        </div>
        <br />
        <Grid item xs={12}>
          <MiUbicacion
            setCenter={setCenter}
            setMarker={addMarker}
            latlng={[lat, lng]}
          />
          <NewLocation onSubmit={handleSubmit} values={initial_form} />
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={12}>
            <Map
              height="43vh"
              width="100%"
              center={[lat, lng]}
              tileLayer={"map"} //dark,map
              zoom={15}
              apiKey="5XTmyrjnjZH3NCCR4VY5GDHGRh2GstoA"
              setMarker={addMarker}
            />
          </Grid>
        </Grid>
      </div>
    )
  );
}
export default MapIndex;
