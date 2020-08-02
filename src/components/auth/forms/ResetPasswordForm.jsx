// General imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Material UI imports
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import Backdrop from "@material-ui/core/Backdrop";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
// Local imports
import Otp from "../Otp";
import { useStyles } from "../styles";
import { isEmpty } from "../../../utils";
import Copyright from "../../shared/copyright";
import { withForm } from "../../shared/hoc/withForm";
import { closeBackdrop } from "../../../redux/ducks/_send_email.duck";

function ResetPassword({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const resetSt = useSelector((store) => store.auth.reset);
  const backdropSt = useSelector((state) => state.backdrops._send_email);
  const [emailError, setEmailError] = useState(null);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    const { errors, data } = resetSt;
    if (!isEmpty(errors)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      const { errors: err } = errors;
      setEmailError(err && err.reset_email ? err.reset_email : null);
    }

    if (!isEmpty(data)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      const { message } = data;
      setMsg(message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSt]);

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
            Recupera tu cuenta
          </Typography>
          <form className={classes.form} noValidate onSubmit={_handleSubmit}>
            <TextField
              required
              fullWidth
              autoFocus
              variant="outlined"
              margin="normal"
              id="reset_email"
              name="reset_email"
              autoComplete="email"
              label="Correo electrónico"
              onChange={_handleChange}
              error={Boolean(emailError)}
              helperText={emailError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar solicitud de recuperación
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/login" variant="body2">
                  Cancelar
                </Link>
              </Grid>
            </Grid>
          </form>
          <Otp open={Boolean(msg)} />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

ResetPassword.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(ResetPassword);
