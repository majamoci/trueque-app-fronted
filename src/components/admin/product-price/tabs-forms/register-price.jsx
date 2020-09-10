import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

const products = [
  {
    value: 'Papa',
    label: '$',
  },
  {
    value: 'Cebolla',
    label: '€',
  },
  {
    value: 'Yuca',
    label: '฿',
  },
  {
    value: 'Rabano',
    label: '¥',
  },
];

const markets = [
  {
    value: 'Santa Clara',
    label: '$',
  },
  {
    value: 'San Roque',
    label: '€',
  },
  {
    value: 'Batallon Del Suburbio ',
    label: '฿',
  },
  {
    value: 'La Playita ',
    label: '¥',
  },
];


const units = [
  {
    value: 'kg',
    label: '$',
  },
  {
    value: 'lb',
    label: '€',
  },
  {
    value: 'lt',
    label: '฿',
  },
  {
    value: 'm',
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

export default function RegisterPrice() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar el precio de un producto
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                select
                id="productname"
                label="Nombre del producto"
                name="productname"
                autoComplete="email"
              >
                {products.map((option) => (
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
                id="marketname"
                label="Nombre del mercado"
                name="marketname"
                autoComplete="email"
              >
                {markets.map((option) => (
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
                id="unitmeasurement"
                label="Unidad de medida"
                name="unitmeasurement"
                autoComplete="email"
              >
                {units.map((option) => (
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
                
                id="date"
                label="Fecha"
                type="date"
                defaultValue="2017-05-24"
                name="date"
                autoComplete="email"
              />
                
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="Precio"
                id="price"
                autoComplete="current-password"
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
            Sign Up
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
