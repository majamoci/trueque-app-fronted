import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RegisterProduct from './register-product';
import RegisterMarket from './register-market';

//
import  fetchRegisterSystemProduct from "redux/actions/sipa/register-system-product.action";
import  fetchRegisterMarket from "redux/actions/sipa/register-market.action";

import {useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MarketProductGrid() {
  const classes = useStyles();

  let dispatch = useDispatch();
  const handleSubmitRegisterProduct = (formData) => {
    dispatch(fetchRegisterSystemProduct(formData));
  };

  const handleSubmitRegisterMarket = (formData) => {
    dispatch(fetchRegisterMarket(formData));
  };


  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}><RegisterProduct onSubmit={handleSubmitRegisterProduct}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><RegisterMarket onSubmit={handleSubmitRegisterMarket}/></Paper>
        </Grid>
        
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
                
      </Grid>
    </div>
  );
}
