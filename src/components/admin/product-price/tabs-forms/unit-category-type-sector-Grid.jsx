import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UnitMeasure from './unit-measure';
import RegisterCategory from './register-category';
import RegisterMarketType from './register-market-type';
import RegisterMarketSector from './register-market-sector';
import { useSelector, useDispatch } from "react-redux";
import fetchRegister from "redux/actions/sipa/register-market-type.actions";
import fetchRegisterUnitMeasure from "redux/actions/sipa/register-unit-measures.actions";
import  fetchRegisterCategory from "redux/actions/sipa/register-category.actions";
import  fetchRegisterSector from "redux/actions/sipa/register-market-sector.actions";

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

const initialForm = {
  name_tp: "",
};



export default function UnitCategoryTypeSectorGrid() {
  const classes = useStyles();
    //
    let dispatch = useDispatch();
    const handleSubmit = (formData) => {
      dispatch(fetchRegister(formData));
    };


  const handleSubmit1 = (formData) => {
    dispatch(fetchRegisterUnitMeasure(formData));
    // activamos el backdrop
    //dispatch(openBackdrop(true));
  };


  const handleSubmitRegisterCategory = (formData) => {
    dispatch(fetchRegisterCategory(formData));
    // activamos el backdrop
    //dispatch(openBackdrop(true));
  };
  
  const handleSubmitRegisterSector = (formData) => {
    dispatch(fetchRegisterSector(formData));
    // activamos el backdrop
    //dispatch(openBackdrop(true));
  };


  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}><UnitMeasure onSubmit={handleSubmit1}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RegisterCategory onSubmit={handleSubmitRegisterCategory}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RegisterMarketType onSubmit={handleSubmit}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RegisterMarketSector onSubmit={handleSubmitRegisterSector}/></Paper>
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
