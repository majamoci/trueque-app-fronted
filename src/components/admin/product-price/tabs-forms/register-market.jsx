import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const types = [
  {
    value: 'Mayoristas',
    label: '$',
  },
  {
    value: 'Intermedios',
    label: '€',
  },
  {
    value: 'Provinciales',
    label: '฿',
  },
  {
    value: 'Otros',
    label: '¥',
  },
];

const sectors = [
  {
    value: 'El Arenal',
    label: '$',
  },
  {
    value: 'El madrugador',
    label: '€',
  },
  {
    value: '4 de Mayo',
    label: '฿',
  },
  {
    value: '14 de Julio',
    label: '¥',
  },
];



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterMarket() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar mercado
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="marketname"
                label="Mercado"
                name="marketname"
                autoComplete="marketname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                select
                id="type"
                label="Tipo"
                name="type"
                autoComplete="type"
              >
                {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.value}  {/*{option.label}  esto esta modificado*/}
                </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                select
                id="sector"
                label="Sector"
                name="sector"
                autoComplete="sector"
              >
                {sectors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.value}  {/*{option.label}  esto esta modificado*/}
                </MenuItem>
                ))}
              </TextField>
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
}
