import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withForm } from "components/shared/hoc/withForm";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useStyles } from "../styles";
import Productlist from "../new/ProductList";

function EditProductForm({ _handleNativeSubmit, open, values }) {
  const classes = useStyles();
  const [userProd, setUserProd] = useState(values);
  const handleListItem = (item) => setUserProd(item);

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h3" component="h1">
        Actualiza un producto
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
                    value={userProd.name || userProd.name_sys_prod}
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
                    value={userProd.category || userProd.name_gtgry}
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
                    value={userProd.price || userProd.price_prod}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    aria-label="guardar-producto"
                  >
                    Actualizar
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

EditProductForm.propTypes = {
  _handleNativeSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(EditProductForm);
