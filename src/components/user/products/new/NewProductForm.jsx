import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { withForm } from "components/shared/hoc/withForm";
import Productlist from "./ProductList";
import { useStyles } from "../styles";

const sys_prod = {
  id: undefined,
  price_prod: "",
  name_sys_prod: "",
  name_gtgry: "",
};

function NewProductForm({ _handleNativeSubmit, open }) {
  const classes = useStyles();
  const [userProd, setUserProd] = useState(sys_prod);
  const handleListItem = (item) => setUserProd(item);

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h3" component="h1">
        Añade un producto
      </Typography>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <form noValidate autoComplete="off" onSubmit={_handleNativeSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    id="name"
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    value={userProd.name_sys_prod}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    id="category"
                    name="category"
                    label="Categoría"
                    variant="outlined"
                    value={userProd.name_gtgry}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    disabled
                    id="price"
                    name="price"
                    label="Precio"
                    variant="outlined"
                    value={userProd.price_prod}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    aria-label="guardar-producto"
                  >
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={4}>
            <Productlist onChange={handleListItem} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

NewProductForm.propTypes = {
  _handleNativeSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(NewProductForm);
