import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import fetchProfiles from "../../../../redux/actions/users/profile.action"
import { isEmpty } from "../../../../utils";

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
  const { className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const profileSt = useSelector((store) => store.user.profile.data);

  useEffect(() => {
    //TODO Guardar datos del usuario en memoria
    dispatch(fetchProfiles("joselito"));
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
              <Typography gutterBottom variant="h2">
                {profileSt.profile.firstname} 
              </Typography>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1"
              >
                {/* {user.city}, {user.country} */}
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              ></Typography>
            </div>
            {/* <Avatar className={classes.avatar} src={user.avatar} /> */}
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
