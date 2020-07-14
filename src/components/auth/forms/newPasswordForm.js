import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Copyright from "../../shared/copyright";
import { useStyles } from "../styles";
import { withForm } from "../../shared/hoc/withForm";
import { isEmpty } from "../../shared/utils";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function NewPassword({ _handleChange, _handleSubmit, values, msg }) {
  const classes = useStyles();
  const changeSt = useSelector((store) => store.change);
  const otpSt = useSelector((store) => store.otp);
  const [pwError, setPwError] = useState(null);
  const [pw2Error, setPw2Error] = useState(null);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    const { errors: response, data } = changeSt;
    if (!isEmpty(response)) {
      const err = response.errors;
      setPwError(err && err.reset_password ? err.reset_password : null);
      setPw2Error(err && err.verify_password ? err.verify_password : null);
    }

    if (!isEmpty(data)) {
      const { message } = data;
      setOk(message);
    }
  }, [changeSt]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Escribe una nueva contraseña
        </Typography>
        <Typography
          variant="overline"
          className={isEmpty(otpSt.data) ? classes.errMsg : classes.okMsg}
        >
          {isEmpty(changeSt.data) ? msg : ok}
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <TextField
            required
            fullWidth
            autoFocus
            variant="outlined"
            margin="normal"
            type="password"
            id="reset_password"
            name="reset_password"
            autoComplete="reset_password"
            label="Nueva contraseña"
            inputProps={{
              maxLength: 32,
            }}
            onChange={_handleChange}
            error={Boolean(pwError)}
            helperText={pwError}
            value={!isEmpty(changeSt.data) ? "" : values.reset_password}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            id="verify_password"
            name="verify_password"
            autoComplete="verify_password"
            label="Confirmar contraseña"
            inputProps={{
              maxLength: 32,
            }}
            onChange={_handleChange}
            error={Boolean(pw2Error)}
            helperText={pw2Error}
            value={!isEmpty(changeSt.data) ? "" : values.verify_password}
          />
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
        {Boolean(ok) && (
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                Ir a Login
              </Link>
            </Grid>
          </Grid>
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

NewPassword.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  msg: PropTypes.string.isRequired,
};

export default withForm(NewPassword);
