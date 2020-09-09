import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { isEmpty } from "utils";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import { withForm } from "components/shared/hoc/withForm";

function NewLocation({
_handleChange,
_handleSubmit,
_handleState,
values,
}){
    const dispatch = useDispatch();
    const history = useHistory();
    const newLC = useSelector((store) => store.loc.new_location);
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        const { errors: response, data } = newLC;
    
        if (!isEmpty(response)) {
          const err = response.errors;
          setErrors({
            lat: err && err.lat ? err.lat : null,
            lng: err && err.lng ? err.lng : null,
            
          });
        }

        // if (!isEmpty(data)) {
        //     // desactivamos el backdrop
        //     dispatch(closeBackdrop(false));
      
        //     // retornamos a la vista principal
        //     // FIXME: al momento de regresar se produce un error
        //     // que desmonta el componente
        //     // history.replace({
        //     //   pathname: "./publicaciones",
        //     // });
        //   }
     }, [dispatch, history, newLC]);
      

    return(
        <form noValidate onSubmit={_handleSubmit} encType="multipart/form-data">
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => alert("Localización guardada")}
                startIcon={<SaveIcon />}
                onChange={_handleState} 
            >
            Guardar
            </Button>
        </form>
    );
}

NewLocation.propTypes = {
    _handleChange: PropTypes.func.isRequired,
    _handleSubmit: PropTypes.func.isRequired,
    _handleState: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
  };

export default withForm(NewLocation);