// general
import PropTypes from "prop-types";
import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { useSelector } from "react-redux";
// material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
// local
import { useStyles } from "../styles";
import { isEmpty } from "utils";
import { withForm } from "components/shared/hoc/withForm";
import Productlist from "./ProductList";

function NewOfferForm({
  _handleChange,
  _handleSubmit,
  _handleProductId,
  open,
  values,
}) {
  const classes = useStyles();
  const newSt = useSelector((store) => store.publication.new);

  const handleChange = (files) => {
    _handleChange({
      target: {
        name: "photos",
        value: files,
      },
    });
  };

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Typography variant="h3" component="h1">
        Oferta un producto de tu elección
      </Typography>
      <form noValidate onSubmit={_handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12}>
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
                  label="Referencia de ubicación"
                  value={!isEmpty(newSt.data) ? "" : values.address}
                  onChange={_handleChange}
                />
              </Grid>
              <Grid item xs={12}>
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
                  value={!isEmpty(newSt.data) ? "" : values.description}
                  onChange={_handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <DropzoneArea
                  acceptedFiles={["image/*"]}
                  filesLimit={5}
                  maxFileSize={2000000}
                  previewGridProps={{
                    item: {
                      md: 3,
                    },
                    container: {
                      spacing: 1,
                    },
                  }}
                  showAlerts={["error"]}
                  dropzoneText={"Arrastra hasta 5 imágenes o haz click aquí"}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Productlist onChange={_handleProductId} />
          </Grid>
        </Grid>
        <div style={{ padding: 20 }} className={classes.actionsContainer}>
          <Button variant="contained" color="primary" type="submit">
            Ofertar
          </Button>
        </div>
      </form>
    </>
  );
}

NewOfferForm.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  _handleProductId: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(NewOfferForm);
