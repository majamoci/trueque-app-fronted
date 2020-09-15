//import React from 'react';
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { closeBackdrop } from "redux/ducks/_register.duck";
import { isEmpty } from "utils";

import PropTypes from "prop-types";
import { withForm } from "components/shared/hoc/withForm";

//para trabajar con redux
import { useSelector, useDispatch } from "react-redux";





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(12, 0, 2),
  },
}));

function UnitMeasure({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [typeError, setTypeError] = useState(null);
  const registerSt = useSelector((store) => store.sipa.register_unit_measure);


  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      const errors = response.errors;
      setTypeError(errors && errors.name_measure ? errors.name_measure : null);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar unidad de medida
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="UnitMeasurement"
                label="Unidad de medida"
                name="name_measure"
                autoComplete="name_measure"
                error={Boolean(typeError)}
                helperText={typeError}
                onChange={_handleChange}//va estar pendiente de este input
              />
            </Grid>
                       
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}

UnitMeasure.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(UnitMeasure);