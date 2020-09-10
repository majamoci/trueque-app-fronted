import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RegisterProduct from './register-product';
import RegisterMarket from './register-market';

//
import  fetchRegisterSystemProduct from "redux/actions/sipa/register-system-product.action";
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
  const handleSubmit = (formData) => {
    dispatch(fetchRegisterSystemProduct(formData));
  };


  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}><RegisterProduct onSubmit={handleSubmit}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><RegisterMarket /></Paper>
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
