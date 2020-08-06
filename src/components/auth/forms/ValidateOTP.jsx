// General
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Material UI
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContentText from "@material-ui/core/DialogContentText";
// Local
import { isEmpty } from "utils";
import { useStyles } from "../styles";
import { withForm } from "components/shared/hoc/withForm";
import { closeBackdrop } from "redux/ducks/_verify_otp.duck";

function ValidateOTP({ _handleChange, _handleSubmit, open: openState }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const otpSt = useSelector((store) => store.auth.otp);
  const backdropSt = useSelector((state) => state.backdrops._verify_otp);
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState(null);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  useEffect(() => {
    const { errors, data } = otpSt;
    if (!isEmpty(errors)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      const { message: err } = errors;
      setOtpError(err ? err : null);
    }

    if (!isEmpty(data)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      history.replace({
        pathname: "/change-password",
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, otpSt]);

  return (
    <>
      <Backdrop className={classes.backdrop} open={backdropSt.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Dialog open={open} maxWidth="sm" aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Verifica el código</DialogTitle>
        <DialogContent>
          <form noValidate onSubmit={_handleSubmit}>
            <DialogContentText>Te enviamos un correo.</DialogContentText>
            <DialogContentText>
              Dentro encontrarás un código de 6 dígitos.
            </DialogContentText>
            <TextField
              required
              fullWidth
              variant="outlined"
              margin="normal"
              id="verify_otp"
              name="verify_otp"
              label="Ingresa el Código"
              inputProps={{
                maxLength: 6,
              }}
              onChange={_handleChange}
              error={Boolean(otpError)}
              helperText={otpError}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Validar
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

ValidateOTP.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withForm(ValidateOTP);
