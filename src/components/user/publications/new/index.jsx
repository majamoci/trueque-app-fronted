// general
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// local
import { useStyles } from "../styles";
import InfoPub from "./InfoPub";
import NewPublicationForm from "./NewPublicationForm";
import { createPublication } from "../service";
import { openBackdrop, closeBackdrop } from "redux/ducks/_new_pub.duck";

// objeto para el formulario
const initial_form = {
  product_id: null,
  title: "",
  address: "",
  available: "one",
  description: "",
  photos: [],
  status: "draft",
};

export default function NewPub() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (formData) => {
    // activamos el backdrop
    dispatch(openBackdrop(true));

    createPublication(formData).then((data) => {
      dispatch(closeBackdrop(false));
      history.goBack();
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InfoPub />
        </Grid>
        <Grid item xs={12} md={8}>
          <NewPublicationForm
            style={classes.pubContainer}
            onSubmit={handleSubmit}
            values={initial_form}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
