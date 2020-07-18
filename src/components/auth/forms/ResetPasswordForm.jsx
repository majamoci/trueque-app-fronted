import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { useStyles } from "../styles";
import { withForm } from "../../shared/hoc/withForm";
import { isEmpty } from "../../shared/utils";
import Otp from "../Otp";

function ResetPassword({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  const resetSt = useSelector((store) => store.auth.reset);
  const [emailError, setEmailError] = useState(null);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    const { errors, data } = resetSt;
    if (!isEmpty(errors)) {
      const { errors: err } = errors;
      setEmailError(err && err.reset_email ? err.reset_email : null);
    }

    if (!isEmpty(data)) {
      const { message } = data;
      setMsg(message);
    }
  }, [resetSt]);

  return (
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
  );
}

ResetPassword.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(ResetPassword);
