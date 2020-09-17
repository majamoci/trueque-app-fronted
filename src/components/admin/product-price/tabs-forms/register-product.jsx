//General
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
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
import fetchGetCategory from "redux/actions/sipa/get-category.action";

const categories = [
  {
    value: 'Frutas',
    label: '3',
  },
  {
    value: 'Hortalizas',
    label: '2',
  },
  {
    value: 'Cereales',
    label: '1',
  },
  {
    value: 'Leguminosas de grano',
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
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(7, 0, 2),
  },
}));

function RegisterProduct({ _handleChange, _handleSubmit }) {
  const classes = useStyles();
  
  const registerSt = useSelector((store) => store.sipa.register_system_product);
  const [name_sys_prodError, setDescriptionError] = useState(null);
  const [categories_idError, setNameGtgryError] = useState(null);

  useEffect(() => {
    const response = registerSt.errors;
    if (!isEmpty(response)) {
      // desactivamos el backdrop
      //dispatch(closeBackdrop(false));

      const errors = response.errors;
      setDescriptionError(errors && errors.name_sys_prod ? errors.name_sys_prod : null);
      setNameGtgryError(errors && errors.categories_id ? errors.categories_id : null);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSt]);

  //para obtener todas las cetegorias 
  const dispatch1 = useDispatch();
  const [loading, setLoading] = useState(true);
  //const [user, setUser] = useState();
  const usersSt1 = useSelector((store) => store.sipa.get_category.data);
  
  
  useEffect(() => {
    dispatch1(fetchGetCategory());
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


 console.log(usersSt1.pubs)

  return (
    !isEmpty(usersSt1) && (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Ingresar producto
        </Typography>
        <form className={classes.form} noValidate onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Product"
                label="Producto"
                name="name_sys_prod"
                autoComplete="email"
                error={Boolean(name_sys_prodError)}
                helperText={name_sys_prodError}
                onChange={_handleChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                select
                id="category"
                label="Categoría"
                name="categories_id"
                autoComplete="email"
                error={Boolean(categories_idError)}
                helperText={categories_idError}
                onChange={_handleChange}
              >
                {usersSt1.pubs.map((option) => (
                <MenuItem key={option.name_gtgry} value={option.id}>
                {option.name_gtgry}  {/*{option.label}  esto esta modificado*/}
                
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

RegisterProduct.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
};

export default withForm(RegisterProduct);
