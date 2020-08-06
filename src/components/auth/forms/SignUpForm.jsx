// General
import React, { useState, useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
// Material UI
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/Lock";
import Backdrop from "@material-ui/core/Backdrop";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
// Local
import { isEmpty } from "utils";
import { useStyles } from "../styles";
import Copyright from "components/shared/copyright";
import { withForm } from "components/shared/hoc/withForm";
import { closeBackdrop } from "redux/ducks/_register.duck";

function SignUp({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const registerSt = useSelector((store) => store.auth.register);
  const backdropSt = useSelector((state) => state.backdrops._register);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      const errors = response.errors;
      setNameError(errors && errors.username ? errors.username : null);
      setEmailError(errors && errors.email ? errors.email : null);
      setPasswordError(errors && errors.password ? errors.password : null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);

  return (
    <>
      <Backdrop className={classes.backdrop} open={backdropSt.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <form className={classes.form} noValidate onSubmit={_handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  name="username"
                  variant="outlined"
                  label="Nombre de usuario"
                  autoComplete="uname"
                  error={Boolean(nameError)}
                  helperText={nameError}
                  onChange={_handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  type="email"
                  name="email"
                  label="Correo electrónico"
                  autoComplete="email"
                  error={Boolean(emailError)}
                  helperText={emailError}
                  onChange={_handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  type="password"
                  name="password"
                  label="Contraseña"
                  autoComplete="current-password"
                  error={Boolean(passwordError)}
                  helperText={passwordError}
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
              Registrarse
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <LinkRouter to="/login" className={classes.link}>
                  Ya tienes cuenta? Ingresa
                </LinkRouter>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

SignUp.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(SignUp);
