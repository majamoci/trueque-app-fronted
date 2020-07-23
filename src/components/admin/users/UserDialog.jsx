import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "../../../redux/actions/dialog.action";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function UserDialog() {
  const dispatch = useDispatch();
  // const classes = useStyles();
  const dialogSt = useSelector((state) => state.user.dialog);

  const handleClose = () => dispatch(closeDialog(false));

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={dialogSt.open}
    >
      <DialogTitle>Datos del usuario</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          {/* Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. */}
          Rolando Caiza
        </Typography>
        <Typography gutterBottom>
          {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. */}
          Ciudad: Latacunga
        </Typography>
        <Typography gutterBottom>
          {/* Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla. */}
          Teléfono: 097 919 6435
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Banner usuario
        </Button>
      </DialogActions>
    </Dialog>
  );
}
