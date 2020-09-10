import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "utils";
import Auth from "utils";
import fetchProfiles from "redux/actions/users/profile.action"

import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
} from "@material-ui/core";

import { useStyles } from "../styles";

const AccountProfile = (props) => {
  const auth = new Auth();
  const { className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const profileSt = useSelector((store) => store.user.profile.data);

  useEffect(() => {
    //TODO Guardar datos del usuario en memoria
    dispatch(fetchProfiles(auth.getUserName()));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Obteniendo información del usuario...</div>;
  
  return (
    !isEmpty(profileSt) && (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h3">
                {profileSt.profile.firstname} {profileSt.profile.lastname} 
              </Typography>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1"
              >
                {profileSt.profile.city}
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              ></Typography>
            </div>
            <Avatar 
              className={classes.avatar}
              src="https://source.unsplash.com/300x300/?face" />
          </div>
          <div className={classes.progress}>
            <Typography variant="body1">Perfil Completado: 70%</Typography>
            <LinearProgress value={70} variant="determinate" />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Button className={classes.uploadButton} color="primary" variant="text">
            Actualizar foto de perfil
          </Button>
          <Button variant="text">Eliminar foto</Button>
        </CardActions>
      </Card>
    )
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string,
};

export default AccountProfile;
