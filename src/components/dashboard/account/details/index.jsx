// general
import clsx from "clsx";
import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
// material UI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// local
import { isEmpty } from "utils";
import PropTypes from "prop-types";
import { useStyles } from "../styles";
import fetchProfiles from "redux/actions/users/profile.action"

const AccountDetails = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const profileSt = useSelector((store) => store.user.profile.data);
  const [values, setValues] = useState({
    firstName: "Joselito",
    lastName: "Morales",
    email: "joselito@gmail.com",
    phone: "0996588664",
    state: "Huambaló",
    country: "Tungurahua",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    //TODO Guardar datos del usuario en memoria
    dispatch(fetchProfiles("joselito"));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Obteniendo información del usuario...</div>;
  
  const states = [
    {
      value: "masculino",
      label: "Masculino",
    },
    {
      value: "fenemino",
      label: "Fenemino",
    },
    {
      value: "nodecirlo",
      label: "Prefiero no decirlo",
    },
  ];
  return (
    !isEmpty(profileSt) && (
     <Card {...rest} className={clsx(classes.root, className)}>
        <form autoComplete="off" noValidate>
          <CardHeader
            subheader="Esta información puede ser editada"
            title="Perfil"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  disabled
                  fullWidth
                  label="Nombre de usuario"
                  margin="dense"
                  name="name"
                  onChange={handleChange}
                  value={profileSt.profile.name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Correo"
                  margin="dense"
                  name="email"
                  onChange={handleChange}
                  required
                  value={profileSt.profile.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Nombre"
                  margin="dense"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={profileSt.profile.firstname}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Apellido"
                  margin="dense"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={profileSt.profile.lastname}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Locación"
                  margin="dense"
                  name="city"
                  onChange={handleChange}
                  required
                  value={profileSt.profile.city}
                  variant="outlined"
                >
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Género"
                  margin="dense"
                  name="gender"
                  onChange={handleChange}
                  required
                  // select
                  value={profileSt.profile.gender}
                  variant="outlined"
                >
                  {/* {states.map((option) => (
                    <option key={profileSt.profile.gender} value={option.value}>
                      {profileSt.profile.gender}
                    </option>
                  ))} */}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Número de teléfono"
                  margin="dense"
                  name="telephone"
                  onChange={handleChange}
                  type="number"
                  required
                  value={profileSt.profile.telephone}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Celular 1"
                  margin="dense"
                  name="mobile"
                  onChange={handleChange}
                  type="number"
                  value={profileSt.profile.mobile}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Celular 2"
                  margin="dense"
                  name="mobile_2"
                  onChange={handleChange}
                  type="number"
                  value={profileSt.profile.mobile_2}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Profesión"
                  margin="dense"
                  name="profession"
                  onChange={handleChange}
                  value={profileSt.profile.profession}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Facebook"
                  margin="dense"
                  name="facebook"
                  onChange={handleChange}
                  value={profileSt.profile.facebook}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Twitter"
                  margin="dense"
                  name="twitter"
                  onChange={handleChange}
                  value={profileSt.profile.twitter}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Instagram"
                  margin="dense"
                  name="instagram"
                  onChange={handleChange}
                  value={profileSt.profile.instagram}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Whatsapp"
                  margin="dense"
                  name="whatsapp"
                  onChange={handleChange}
                  value={profileSt.profile.whatsapp}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Telegram"
                  margin="dense"
                  name="telegram"
                  onChange={handleChange}
                  value={profileSt.profile.telegram}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Intereses"
                  margin="dense"
                  name="interests"
                  onChange={handleChange}
                  value={profileSt.profile.interests}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button color="primary" variant="contained">
              Guardar
            </Button>
          </CardActions>
        </form>
      </Card>
    )
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default AccountDetails;
