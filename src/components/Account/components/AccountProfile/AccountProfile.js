import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    details: {
      display: 'flex'
    },
    avatar: {
      marginLeft: 'auto',
      height: 110,
      width: 100,
      flexShrink: 0,
      flexGrow: 0
    },
    
  }));
  
  const AccountProfile = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    const user = {
      name: 'Joselito Morales',
      city: 'Huambaló',
      country: 'Tungurahua',
      avatar: ''
    };
  
    return (
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography
                gutterBottom
                variant="h2"
              >
                Joselito Morales
              </Typography>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1"
              >
                {user.city}, {user.country}
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
              </Typography>
            </div>
            <Avatar
              className={classes.avatar}
              src={user.avatar}
            />
          </div>
          <div className={classes.progress}>
            <Typography variant="body1">Perfil Completado: 70%</Typography>
            <LinearProgress
              value={70}
              variant="determinate"
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            Actualizar foto de perfil
          </Button>
          <Button variant="text">Eliminar foto</Button>
        </CardActions>
      </Card>
    );
  };
  
  AccountProfile.propTypes = {
    className: PropTypes.string
  };

export default AccountProfile;