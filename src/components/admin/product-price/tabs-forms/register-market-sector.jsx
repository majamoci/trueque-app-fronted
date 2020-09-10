// General
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Material UI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// Local
import { isEmpty } from "utils";
import { withForm } from "components/shared/hoc/withForm";

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
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterMarketSector({ _handleChange, _handleSubmit }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const registerSt = useSelector((store) => store.sipa.register_sector);
  const [name_sectorError, setNameSectorError] = useState(null);
  const [direction_sectorError, setDirectionSectorError] = useState(null);
  
  useEffect(() => {
    //const response = registerSt.errors;

    const { errors: response } = registerSt;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      //dispatch(closeBackdrop(false));

      const errors = response.errors;
      setNameSectorError(errors && errors.name_str ? errors.name_str : null);
      setDirectionSectorError(errors && errors.direction_str ? errors.direction_str : null);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar sector del mercado
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sector"
                label="Sector"
                name="name_str"
                autoComplete="sector"
                error={Boolean(name_sectorError)}
                helperText={name_sectorError}
                onChange={_handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="direction_str"
                label="Dirección"
                type="address"
                id="address"
                autoComplete="current-address"
                error={Boolean(direction_sectorError)}
                helperText={direction_sectorError}
                onChange={_handleChange}
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

RegisterMarketSector.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(RegisterMarketSector);
