import React, { useState, useEffect } from "react";
import { Link as LinkRouter, useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../shared/copyright";
import { useDispatch, useSelector } from "react-redux";
import fetchRegister from "../../redux/actions/register.action";
import fetchRole from "../../redux/actions/role.action";

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
    textDecoration: "none",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const registerSt = useSelector((store) => store.register);
  const roleSt = useSelector((store) => store.user);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleFName = (e) => setFName(e.target.value);
  const handleLName = (e) => setLName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchRegister({ name: `${fName} ${lName}`, email, password }));
  };

  useEffect(() => {
    // verificamos si el objeto tokens esta completo
    if (registerSt && registerSt.tokens.status_code === 200) {
      let { access_token } = registerSt.tokens;
      // guardamos el estado del rol
      dispatch(fetchRole(email, access_token));
    } else {
      if (registerSt.errors.errors) {
        const errors = Object.keys(registerSt.errors.errors);

        if (errors.includes("name")) {
          setNameError(registerSt.errors.errors.name);
        }

        if (errors.includes("email")) {
          setEmailError(registerSt.errors.errors.email);
        }

        if (errors.includes("password")) {
          setPasswordError(registerSt.errors.errors.password);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);

  useEffect(() => {
    if (roleSt && roleSt.roles.status_code === 200) {
      history.replace({
        pathname: "/dashboard",
      });
    }
  });

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
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={Boolean(nameError)}
                helperText={nameError ? nameError : ""}
                autoFocus
                required
                fullWidth
                name="firstName"
                variant="outlined"
                label="Nombres"
                autoComplete="fname"
                onChange={handleFName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={Boolean(nameError)}
                helperText={nameError ? nameError : ""}
                required
                fullWidth
                variant="outlined"
                label="Apellidos"
                name="lastName"
                autoComplete="lname"
                onChange={handleLName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(emailError)}
                helperText={emailError ? emailError : ""}
                required
                fullWidth
                variant="outlined"
                type="email"
                name="email"
                label="Correo electrónico"
                autoComplete="email"
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={Boolean(passwordError)}
                helperText={passwordError ? passwordError : ""}
                required
                fullWidth
                variant="outlined"
                type="password"
                name="password"
                label="Contraseña"
                autoComplete="current-password"
                onChange={handlePassword}
              />
            </Grid>
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
