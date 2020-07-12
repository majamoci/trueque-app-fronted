import React, { useState, useEffect } from "react";
//import React from "react";
import {Link as LinkRouter} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../shared/copyright";
import { useDispatch, useSelector } from "react-redux";
import fetchLogin from "../../redux/actions/signup.action";
import fetchRole from "../../redux/actions/role.action";
import store from "../../redux/store";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none"
  }
}));

export default function SignUp() {
  const classes = useStyles();//esta ya estaba

  //
  const dispatch = useDispatch();
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState("");
  const loginStore = useSelector((state) => state.register);



  // funciones para capturar los datos email, password
  const handleEmail = (e) => {
    setEmail(e.target.value);//esta al pendiente de los cambios del input imail
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);//esta al pendiente de los cambios del input password
  };

  const handleForm = (e) => {
    e.preventDefault();
    //setEmail(e.target.value);
    dispatch(fetchLogin({ email, password }));
  };


//
useEffect(() => {
  // verificamos si el objeto tokens esta completo
  if (loginStore && loginStore.tokens.status_code === 200) {
    let access_token = loginStore.tokens.access_token;
    // guardamos el estado del rol
    setEmail(true);
    dispatch(fetchRole(email, access_token));

    setEmail(true);

  }
  // eslint-disable-next-line react-hooks/exhaustive-deps

}, [loginStore]);
//

console.log(store.getState());

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Crear cuenta
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombres"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               onChange={handleEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                error={email}
               // helperText="Incorrect email."   // hay que poner alguna funcion aqui creo 
                //helperText={handleEmail}

                helperText={setEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handlePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <LinkRouter to="/login" className={classes.link}>
                Ya tienes cuenta? Ingresa
              </LinkRouter>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
