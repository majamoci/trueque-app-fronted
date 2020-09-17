import React, { useEffect } from "react";
import { getPublishedPublications } from "components/user/publications/service";

const Map = ({ height, width, center, tileLayer, zoom, apiKey }) => {
  useEffect(() => {
    //Api key
    window.L.mapquest.key = apiKey;

    //inicializar mapa
    const map = window.L.mapquest.map("map", {
      center,
      layers: window.L.mapquest.tileLayer(tileLayer),
      zoom,
    });

    getPublishedPublications().then((data) => {
      // Generate the feature group containing markers from the geocoded locations
      let featureGroup = generateMarkersFeatureGroup(data.pubs);

      // Add markers to the map and zoom to the features
      featureGroup.addTo(map);
      map.fitBounds(featureGroup.getBounds());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateMarkersFeatureGroup = (response) => {
    var group = [];
    for (var i = 0; i < response.length; i++) {
      console.log(response);
      var locationLatLng = {
        lat: response[i].lat,
        lng: response[i].lng,
      };

      // Create a marker for each location
      var marker = window.L.marker(locationLatLng, {
        icon: window.L.mapquest.icons.marker(),
      });

      group.push(marker);
    }
    return window.L.featureGroup(group);
  };

  return (
    <div id="map" style={{ width, height }}>
      <p>Cargando mapa...</p>
    </div>
  );
};

export default Map;
