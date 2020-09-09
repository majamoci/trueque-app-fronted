// general
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// material ui
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
// local
import { useStyles } from "../styles";
import ButtonConditional from "./ButtonConditional";
import SwitchButton from "../../shared/SwitchButton";
import { withForm } from "components/shared/hoc/withForm";

function EditPublicationForm({
  _handleChange,
  _handleSubmit,
  _handleState,
  values,
}) {
  const classes = useStyles();
  const backdropSt = useSelector((state) => state.backdrops._new_pub);
  return (
    <>
      <Backdrop className={classes.backdrop} open={backdropSt.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <form noValidate onSubmit={_handleSubmit}>
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
                  value={values.title}
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
                  value={values.address}
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
                  value={values.description}
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
                value={values.available}
              />
            </Grid>
          </Grid>
        </Grid>
        <div style={{ padding: 20 }} className={classes.actionsContainer}>
          <ButtonConditional onChange={_handleState} />
        </div>
      </form>
    </>
  );
}

EditPublicationForm.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  _handleState: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(EditPublicationForm);
