import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const Busqueda = ({ setCenter, addMarker, clearMarkers }) =>{
    const [query, setQuery] = useState('');
    const handleChange = (e) =>{
        setQuery(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        findLocation();
    };

    const findLocation = () =>{
        if(!query.length) return;

        if(clearMarkers) clearMarkers();

        window.L.mapquest.geocoding().geocode(query, 
            (error, response) => {
                console.log(response);
                response.results.forEach((result, res_index) => {
                    //procesamos las ubicaciones de cada resultado
                    result.locations.forEach(location =>{
                        const { street, adminArea5, adminArea3, latLng } = location;
                        if (res_index === 0){
                            setCenter(latLng.lat, latLng.lng);
                        }
                        addMarker(
                            latLng.lat,
                            latLng.lng,
                            `lat: ${latLng.lat}, lng: ${latLng.lng}`,
                            `${street || ''}, ${adminArea5}, ${adminArea3}` //subtitulo
                        );
                    });
                });
            }
        );
    };

    return (
        <form onSubmit = {handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        defaultValue={query}
                        fullWidth
                        id="query"
                        label="Buscar"
                        type="text"
                        onChange={handleChange}
                        variant="outlined"
                    />  
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="submit"
                        variant="contained" 
                        color="primary"
                        disabled={!query.length}
                    >
                        Buscar
                    </Button>
                </Grid>
                
            </Grid>        
        </form>
    );
};
export default Busqueda;