import React, {useEffect} from "react";
// eslint-disable-next-line
const Map = ({height, width, center, tileLayer, zoom, apiKey}) =>{
    useEffect (() =>{
        //Api key
        window.L.mapquest.key=apiKey;

        //inicializar mapa
        const map = window.L.mapquest.map('map',{
            center,
            layers:window.L.mapquest.tileLayer(tileLayer),
            zoom
        });

        map.addControl(window.L.mapquest.control());
        // eslint-disable-next-line
    }, []);



    return(
        <div id="map" style={{width, height}}>
            <p>Cargando mapa...</p>

        </div>
    );
};

export default Map;