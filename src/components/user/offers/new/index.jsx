// general
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// local
import { useStyles } from "../styles";
import NewOfferForm from "./NewOfferForm";
import { createOffer } from "../service";
import { openBackdrop, closeBackdrop } from "redux/ducks/_new_pub.duck";

// objeto para el formulario
const initial_form = {
  product_id: null,
  address: "",
  description: "",
  photos: [],
};

export default function NewOffer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (formData) => {
    // activamos el backdrop
    dispatch(openBackdrop(true));

    createOffer(formData)
      .then((data) => {
        dispatch(closeBackdrop(false));
        console.log(data);
        history.replace({
          pathname: `admin/intercambio/from-offer/${data.offer_id}`,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NewOfferForm
            style={classes.pubContainer}
            onSubmit={handleSubmit}
            values={initial_form}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
