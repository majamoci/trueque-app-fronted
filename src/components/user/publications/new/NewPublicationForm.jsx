// general
import PropTypes from "prop-types";
import React from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { useSelector, } from "react-redux";
// material ui
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
// local
import { useStyles } from "../styles";
import { isEmpty } from "utils";
import ButtonConditional from "./ButtonConditional";
import SwitchButton from "../../shared/SwitchButton";
import { withForm } from "components/shared/hoc/withForm";
import Productlist from "./ProductList";

function NewPublicationForm({
  _handleChange,
  _handleSubmit,
  _handleState,
  _handleProductId,
  values,
}) {
  const classes = useStyles();
  const newSt = useSelector((store) => store.publication.new);
  const backdropSt = useSelector((state) => state.backdrops._new_pub);

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
      <Backdrop className={classes.backdrop} open={backdropSt.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <form noValidate onSubmit={_handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  // autoFocus
                  variant="outlined"
                  margin="normal"
                  id="title"
                  label="Título de la publicación"
                  name="title"
                  autoComplete="title"
                  value={!isEmpty(newSt.data) ? "" : values.title}
                  onChange={_handleChange}
                />
              </Grid>
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
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item xs={12} md={4}>
              <SwitchButton
                title="Disponibilidad"
                onChange={_handleChange}
                value={!isEmpty(newSt.data) ? "" : values.available}
              />
            </Grid>
            <Productlist onChange={_handleProductId} />
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
        <div style={{ padding: 20 }} className={classes.actionsContainer}>
          <ButtonConditional onChange={_handleState} />
        </div>
      </form>
    </>
  );
}

NewPublicationForm.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  _handleState: PropTypes.func.isRequired,
  _handleProductId: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(NewPublicationForm);
