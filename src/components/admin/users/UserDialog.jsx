import React from "react";
import { green } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CallIcon from "@material-ui/icons/Call";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import SettingsCellIcon from "@material-ui/icons/SettingsCell";
import { makeStyles } from "@material-ui/core/styles";
import { closeDialog } from "../../../redux/actions/users/dialog.action";

const sizeAvatar = 64;
const useStyles = makeStyles((theme) => ({
  relative: {
    width: sizeAvatar,
    height: sizeAvatar,
    left: sizeAvatar / 4,
    bottom: sizeAvatar / 2 + 6,
    position: "relative",
  },
  imageBox: {
    maxWidth: 345,
  },
  image: {
    width: "100%",
  },
  text: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function UserDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dialogSt = useSelector((state) => state.user.dialog);
  const handleClose = () => dispatch(closeDialog(false));

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={dialogSt.open}
    >
      <div className={classes.imageBox}>
        <img
          src="/contemplative-reptile.jpg"
          alt="Reptile"
          className={classes.image}
        />
        <Avatar
          src="/contemplative-reptile.jpg "
          className={classes.relative}
        />
      </div>

      <DialogContent>
        <Typography variant="h5" gutterBottom>
          Rolando Caiza
        </Typography>
        <Typography gutterBottom className={classes.text}>
          <SettingsCellIcon style={{ color: green[500] }} />
          &nbsp;
          <span>097 919 6435</span>
        </Typography>
        <Typography gutterBottom className={classes.text}>
          <CallIcon style={{ color: green[500] }} />
          &nbsp;
          <span>3731700</span>
        </Typography>
        <Typography gutterBottom className={classes.text}>
          <LocationCityIcon style={{ color: green[500] }} />
          &nbsp;
          <span>Latacunga</span>
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
