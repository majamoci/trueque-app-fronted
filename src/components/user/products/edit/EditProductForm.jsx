import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withForm } from "components/shared/hoc/withForm";

function EditProductForm({ _handleSubmit, _handleChange, values }) {
  return (
    <>
      <Typography variant="h3" component="h1">
        Actualiza un producto
      </Typography>
      <Container maxWidth="sm">
        <form noValidate autoComplete="off" onSubmit={_handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                label="Nombre"
                variant="outlined"
                value={values.name}
                onChange={_handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="category"
                name="category"
                label="Categoría"
                variant="outlined"
                value={values.category}
                onChange={_handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="price"
                name="price"
                label="Precio"
                variant="outlined"
                value={values.price}
                onChange={_handleChange}
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
      </Container>
    </>
  );
}

EditProductForm.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(EditProductForm);
