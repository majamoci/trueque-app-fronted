// General imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
// Material UI imports
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
// Local imports
import { useStyles } from "../styles";
import { isEmpty } from "../../../utils";
import Copyright from "../../shared/copyright";
import { withForm } from "../../shared/hoc/withForm";
import { closeBackdrop } from "../../../redux/ducks/_login.duck";

function SignIn({ _handleChange, _handleRemember, _handleSubmit }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginSt = useSelector((state) => state.auth.login);
  const backdropSt = useSelector((state) => state.backdrops._login);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    const { errors: response } = loginSt;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      const errors = response.errors;
      setEmailError(errors && errors.email ? errors.email : null);
      setPasswordError(errors && errors.password ? errors.password : null);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSt]);

  return (
    <>
      <Backdrop className={classes.backdrop} open={backdropSt.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
    
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesión
            </Typography>
            <form className={classes.form} noValidate onSubmit={_handleSubmit}>
              <TextField
                required
                fullWidth
                autoFocus
                variant="outlined"
                margin="normal"
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                error={Boolean(emailError)}
                helperText={emailError}
                onChange={_handleChange}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Contraseña"
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={Boolean(passwordError)}
                helperText={passwordError}
                onChange={_handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
                onChange={_handleRemember}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/reset-password" className={classes.link}>
                    Olvidó su contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" className={classes.link}>
                    No tienes una cuenta? Registrarse
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5} align="center"> 
                <img
                  src="/rantiLogo.png"
                  alt="Logo Ranti"
                  style={{ width: "25%"}}
  
                />               
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

SignIn.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  _handleRemember: PropTypes.func.isRequired,
};

export default withForm(SignIn);
