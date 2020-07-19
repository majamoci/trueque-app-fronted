import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as LinkRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../../shared/copyright";
import { useSelector } from "react-redux";
import { useStyles } from "../styles";
import { withForm } from "../../shared/hoc/withForm";
import { isEmpty } from "../../../utils";

function SignUp({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const registerSt = useSelector((store) => store.auth.register);
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      const errors = response.errors;
      setNameError(errors && errors.username ? errors.username : null);
      setEmailError(errors && errors.email ? errors.email : null);
      setPasswordError(errors && errors.password ? errors.password : null);
    }
  }, [registerSt]);

  return (
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
  );
}

SignUp.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(SignUp);
