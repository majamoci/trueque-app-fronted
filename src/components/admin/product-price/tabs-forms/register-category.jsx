//General
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
//
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//Local
import { withForm } from "components/shared/hoc/withForm";
import { isEmpty } from "utils";

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

function RegisterCategory({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const registerSt = useSelector((store) => store.sipa.fetchRegisterCategory);
  const [description_gtgryError, setDescriptionError] = useState(null);
  const [name_gtgryError, setNameGtgryError] = useState(null);

  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      //dispatch(closeBackdrop(false));

      const errors = response.errors;
      setDescriptionError(errors && errors.name_gtgry ? errors.name_gtgry : null);
      setNameGtgryError(errors && errors.description_gtgry ? errors.description_gtgry : null);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);




  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar categoría
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="category"
                label="Categoría"
                name="name_gtgry"
                autoComplete="category"
                autoComplete="current-password"
                error={Boolean(name_gtgryError)}
                helperText={name_gtgryError}
                onChange={_handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description_gtgry"
                label="Descripción"
                type="description"
                id="description"
                autoComplete="current-password"
                error={Boolean(description_gtgryError)}
                helperText={description_gtgryError}
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

RegisterCategory.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(RegisterCategory);
