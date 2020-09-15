//General
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector} from "react-redux";
//

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

//Local
import { withForm } from "components/shared/hoc/withForm";
import { isEmpty } from "utils";

const products = [
  {
    value: 'Zanahoria',
    label: '1',
  },
  {
    value: 'Cebolla',
    label: '2',
  },
  {
    value: 'Manzana',
    label: '3',
  },
  {
    value: 'Cebolla',
    label: '4',
  },
];

const markets = [
  {
    value: 'El Salto',
    label: '1',
  },
  {
    value: 'La Carolina',
    label: '2',
  },
  {
    value: 'Iñaquito ',
    label: '3',
  },
  {
    value: 'La Playita ',
    label: '4',
  },
];


const units = [
  {
    value: 's',
    label: '1',
  },
  {
    value: 'mol',
    label: '2',
  },
  {
    value: 'mg',
    label: '3',
  },
  {
    value: 'lb',
    label: '4',
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

function RegisterPrice({ _handleChange, _handleSubmit }) {
  const classes = useStyles();


  const registerSt = useSelector((store) => store.sipa.register_price);
  const [system_products_idError, setProductError] = useState(null);
  const [market_idError, setMarketError] = useState(null);
  const [unit_measures_idError, setUnitMeasureError] = useState(null);
  const [date_priceError, setUnitDateError] = useState(null);
  const [price_prodError, setPriceProdError] = useState(null);


  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      //dispatch(closeBackdrop(false));

      const errors = response.errors;
      setProductError(errors && errors.system_products_id ? errors.system_products_id : null);
      setMarketError(errors && errors.market_id ? errors.market_id : null);
      setUnitMeasureError(errors && errors.unit_measures_id ? errors.unit_measures_id : null);
      setUnitDateError(errors && errors.date_price ? errors.date_price : null);
      setPriceProdError(errors && errors.price_prod ? errors.price_prod : null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar el precio de un producto
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                select
                id="productname"
                label="Nombre del producto"
                name="system_products_id"
                autoComplete="email"
                error={Boolean(system_products_idError)}
                helperText={system_products_idError}
                onChange={_handleChange}

              >
                {products.map((option) => (
                <MenuItem key={option.value} value={option.label}>
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
                name="market_id"
                autoComplete="email"
                error={Boolean(market_idError)}
                helperText={market_idError}
                onChange={_handleChange}
                
              >
                {markets.map((option) => (
                <MenuItem key={option.value} value={option.label}>
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
                name="unit_measures_id"
                autoComplete="email"
                error={Boolean(unit_measures_idError)}
                helperText={unit_measures_idError}
                onChange={_handleChange}
              >
                {units.map((option) => (
                <MenuItem key={option.value} value={option.label}>
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
                name="date_price"
                autoComplete="email"
                error={Boolean(date_priceError)}
                helperText={date_priceError}
                onChange={_handleChange}
              />
                
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price_prod"
                label="Precio"
                id="price"
                autoComplete="current-password"
                error={Boolean(price_prodError)}
                helperText={price_prodError}
                onChange={_handleChange}

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
            Guardar
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}

RegisterPrice.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(RegisterPrice);