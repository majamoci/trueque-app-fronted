//General
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
//
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//Local
import { withForm } from "components/shared/hoc/withForm";
import { isEmpty } from "utils";

import fetchGetMarketTyp from "redux/actions/sipa/get-markettype.action";
import fetchGetMarketSector from "redux/actions/sipa/get-market-sector.action";

const types = [
  {
    value: 'Mayoristas',
    label: '1',
  },
  {
    value: 'Intermedios',
    label: '2',
  },
  {
    value: 'Provinciales',
    label: '3',
  },
  {
    value: 'Otros',
    label: '4',
  },
];

const sectors = [
  {
    value: 'El Arenal',
    label: '1',
  },
  {
    value: 'El madrugador',
    label: '2',
  },
  {
    value: '4 de Mayo',
    label: '3',
  },
  {
    value: '14 de Julio',
    label: '5',
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

function RegisterMarket({ _handleChange, _handleSubmit }) {
  const classes = useStyles();

  const registerSt = useSelector((store) => store.sipa.register_market);

  const [name_marketError, setNameMarketError] = useState(null);
  const [markettype_idError, setMarketTypeIdError] = useState(null);
  const [marketsectors_idError, setMarketSectorsIdError] = useState(null);

  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      //dispatch(closeBackdrop(false));

      const errors = response.errors;
      setNameMarketError(errors && errors.name_market ? errors.name_market : null);
      setMarketTypeIdError(errors && errors.markettypes_id ? errors.markettypes_id : null);
      setMarketSectorsIdError(errors && errors.marketsectors_id ? errors.marketsectors_id : null);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);



  //para obtener todos los Sectores y tipos
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();
  
  const [loading, setLoading] = useState(true);
  //const [user, setUser] = useState();
  const usersSt1 = useSelector((store) => store.sipa.get_market_tp.data);
  const usersSt2 = useSelector((store) => store.sipa.get_market_sec.data);
  
  useEffect(() => {
    dispatch1(fetchGetMarketTyp());
    dispatch2(fetchGetMarketSector());
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  //console.log(usersSt1.pubs)

  return (
    !isEmpty(usersSt1&&usersSt2) && (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar mercado
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="marketname"
                label="Mercado"
                name="name_market"
                autoComplete="name_market"
                error={Boolean(name_marketError)}
                helperText={name_marketError}
                onChange={_handleChange}

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
                name="markettypes_id"
                autoComplete="type"
                error={Boolean(markettype_idError)}
                helperText={markettype_idError}
                onChange={_handleChange}
              >
                {usersSt1.markettypes.map((option) => (
                <MenuItem key={option.name_tp} value={option.id}>
                {option.name_tp}  {/*{option.label}  esto esta modificado*/}
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
                name="marketsectors_id"
                autoComplete="sector"

                error={Boolean(marketsectors_idError)}
                helperText={marketsectors_idError}
                onChange={_handleChange}

              >
                {usersSt2.pubs.map((option) => (
                <MenuItem key={option.name_str} value={option.id}>
                {option.name_str}  {/*{option.label}  esto esta modificado*/}
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
    )
  );
}

RegisterMarket.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(RegisterMarket);