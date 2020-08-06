// general
import React from "react";
import { useDispatch } from "react-redux";
// material ui
import { Container, Grid } from "@material-ui/core";
// local
import { useStyles } from "./styles";
import InfoPub from "./forms/InfoPub";
import NewPublication from "./forms/NewPublishForm";
import { openBackdrop } from "../../../redux/ducks/_new_pub.duck";
import fetchCreatePub from "../../../redux/actions/publications/create.action";

// objeto para el formulario

const initial_form = {
  title: "",
  price: 0,
  category: "",
  address: "",
  description: "",
  available: "one",
  state: "draft",
  photos: [],
};

export default function NewPub() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(fetchCreatePub(formData));

    // activamos el backdrop
    dispatch(openBackdrop(true));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InfoPub />
        </Grid>
        <Grid item xs={12} md={8}>
          <NewPublication
            style={classes.pubContainer}
            onSubmit={handleSubmit}
            values={initial_form}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
