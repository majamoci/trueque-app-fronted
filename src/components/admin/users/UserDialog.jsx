// general
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CallIcon from "@material-ui/icons/Call";
import { green, red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import SettingsCellIcon from "@material-ui/icons/SettingsCell";
// local
import { useStyles } from "./styles";
import { isEmpty } from '../../../utils';
import fetchProfile from "../../../redux/actions/users/mini_profile.action";
import { closeDialog } from "../../../redux/actions/users/dialog.action";

export default function UserDialog({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const dialogSt = useSelector((store) => store.user.dialog);
  const profileSt = useSelector((store) => store.user.mini_profile.data);
  const handleClose = () => dispatch(closeDialog(false));

  useEffect(() => {
    dispatch(fetchProfile(user));
    setLoading(false);
  }, [dispatch, user]);
  console.log(profileSt);

  if (loading) return <div>Obteniendo información...</div>;

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
          src="https://source.unsplash.com/300x300/?face"
          className={classes.relative}
        />
      </div>

      <DialogContent>
        {!isEmpty(profileSt) && (
          <>
            <Typography variant="h5" gutterBottom>
              {profileSt.profile.firstname}
            </Typography>
            {profileSt.profile.mobile && (
              <Typography gutterBottom className={classes.text}>
                <SettingsCellIcon style={{ color: green[500] }} />
                &nbsp;
                {profileSt.profile.mobile}
              </Typography>
            )}
            {profileSt.profile.telephone && (
              <Typography gutterBottom className={classes.text}>
                <CallIcon style={{ color: green[500] }} />
                &nbsp;
                {profileSt.profile.telephone}
              </Typography>
            )}
            {profileSt.profile.city && (
              <Typography gutterBottom className={classes.text}>
                <LocationCityIcon style={{ color: green[500] }} />
                &nbsp;
                {profileSt.profile.city}
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="secondary">
          Banear usuario
        </Button>
      </DialogActions>
    </Dialog>
  );
}


UserDialog.propTypes = {
  user: PropTypes.string,
};

UserDialog.defaultProps = {
  user: "e"
};