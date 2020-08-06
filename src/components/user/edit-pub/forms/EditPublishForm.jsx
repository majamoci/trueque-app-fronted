// general
import React from "react";
import PropTypes from "prop-types";
// material UI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
// local
import { useStyles } from "../../shared/styles";
import SelectCategory from "../../shared/Select";
import SwitchButton from "../../shared/SwitchButton";
import { withForm } from "components/shared/hoc/withForm";

function EditPublication({ _handleChange, _handleSubmit, onNext, values }) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <form noValidate onSubmit={_handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              autoFocus
              variant="outlined"
              margin="normal"
              id="title"
              label="Título de la publicación"
              name="title"
              autoComplete="title"
              value={values.title}
              // error={Boolean(emailError)}
              // helperText={emailError}
              onChange={_handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              required
              fullWidth
              type="number"
              variant="outlined"
              margin="normal"
              id="price"
              label="Precio referencial"
              name="price"
              autoComplete="price"
              value={values.price}
              // error={Boolean(emailError)}
              // helperText={emailError}
              onChange={_handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectCategory onSelect={_handleChange} value={values.category} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              required
              fullWidth
              multiline
              rowsMax={4}
              variant="outlined"
              margin="normal"
              id="address"
              name="address"
              autoComplete="address"
              label="Dirección"
              value={values.address}
              // error={Boolean(emailError)}
              // helperText={emailError}
              onChange={_handleChange}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              multiline
              fullWidth
              required
              rowsMax={5}
              variant="outlined"
              id="description"
              name="description"
              autoComplete="description"
              label="Descripción"
              value={values.description}
              // error={Boolean(emailError)}
              // helperText={emailError}
              onChange={_handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SwitchButton
              title="Disponibilidad"
              onChange={_handleChange}
              value={values.available}
            />
          </Grid>
          {!onNext && (
            <Grid item xs={12}>
              <DropzoneArea
                acceptedFiles={["image/*"]}
                filesLimit={5}
                maxFileSize={2000000}
                showAlerts={["error"]}
                dropzoneText={"Arrastra hasta 5 imágenes o haz click aquí"}
                onChange={(files) => console.log("Files:", files)}
              />
            </Grid>
          )}
        </Grid>
        <div className={classes.actionsContainer}>
          {onNext && (
            <Button
              variant="contained"
              type="button"
              color="primary"
              className={classes.button}
              onClick={() => onNext()}
            >
              siguiente
            </Button>
          )}
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            className={classes.button}
          >
            guardar como borrador
          </Button>
        </div>
      </form>
    </Container>
  );
}

EditPublication.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(EditPublication);
