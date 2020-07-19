import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { TextField, DialogContentText, DialogContent } from "@material-ui/core";
import { withForm } from "../../shared/hoc/withForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isEmpty } from "../../../utils";

function ValidateOTP({ _handleChange, _handleSubmit, open: openState }) {
  const history = useHistory();
  const otpSt = useSelector((store) => store.auth.otp);
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState(null);

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  useEffect(() => {
    const { errors, data } = otpSt;
    if (!isEmpty(errors)) {
      const { message: err } = errors;
      setOtpError(err ? err : null);
    }

    if (!isEmpty(data)) {
      history.replace({
        pathname: "/change-password",
      });
    }
  }, [history, otpSt]);

  return (
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
  );
}

ValidateOTP.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withForm(ValidateOTP);
