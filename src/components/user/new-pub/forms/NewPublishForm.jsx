// general
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { useSelector, useDispatch } from "react-redux";
// material ui
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
// local
import { useStyles } from "../styles";
import { isEmpty } from "../../../../utils";
import SelectCategory from "../../shared/Select";
import ButtonConditional from "./buttonConditional";
import SwitchButton from "../../shared/SwitchButton";
import { withForm } from "../../../shared/hoc/withForm";
import { closeBackdrop } from "../../../../redux/ducks/_new_pub.duck";

function NewPublication({
  _handleChange,
  _handleSubmit,
  _handleState,
  values,
}) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const newSt = useSelector((store) => store.publication.new);
  const backdropSt = useSelector((state) => state.backdrops._new_pub);
  const [errors, setErrors] = useState({});

  const handleChange = (files) => {
    _handleChange({
      target: {
        name: "photos",
        value: files,
      },
    });
  };

  useEffect(() => {
    const { errors: response, data } = newSt;

    if (!isEmpty(response)) {
      const err = response.errors;
      setErrors({
        title: err && err.title ? err.title : null,
        price: err && err.price ? err.price : null,
        address: err && err.address ? err.address : null,
        category: err && err.category ? err.category : null,
        description: err && err.description ? err.description : null,
      });
    }

    if (!isEmpty(data)) {
      // desactivamos el backdrop
      dispatch(closeBackdrop(false));

      // retornamos a la vista principal
      // FIXME: al momento de regresar se produce un error
      // que desmonta el componente
      // history.replace({
      //   pathname: "./publicaciones",
      // });
    }
  }, [dispatch, history, newSt]);

  return (
    <>
      <Backdrop className={classes.backdrop} open={backdropSt.open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <form noValidate onSubmit={_handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2}>
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
              error={Boolean(errors.title)}
              helperText={errors.title}
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
              value={!isEmpty(newSt.data) ? "" : values.price}
              error={Boolean(errors.price)}
              helperText={errors.price}
              onChange={_handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectCategory
              onSelect={_handleChange}
              value={!isEmpty(newSt.data) ? "" : values.category}
              error={Boolean(errors.category)}
              helperText={errors.category}
            />
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
              value={!isEmpty(newSt.data) ? "" : values.address}
              error={Boolean(errors.address)}
              helperText={errors.address}
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
              value={!isEmpty(newSt.data) ? "" : values.description}
              error={Boolean(errors.description)}
              helperText={errors.description}
              onChange={_handleChange}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SwitchButton
              title="Disponibilidad"
              onChange={_handleChange}
              value={!isEmpty(newSt.data) ? "" : values.available}
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
        <div style={{ padding: 20 }} className={classes.actionsContainer}>
          <ButtonConditional onChange={_handleState} />
        </div>
      </form>
    </>
  );
}

NewPublication.propTypes = {
  _handleChange: PropTypes.func.isRequired,
  _handleSubmit: PropTypes.func.isRequired,
  _handleState: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withForm(NewPublication);
