// general
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// local
import { useStyles } from "../styles";
import NewOfferForm from "./NewOfferForm";
import { createOffer } from "../service";

// objeto para el formulario
const initial_form = {
  product_id: null,
  address: "",
  description: "",
  photos: [],
};

export default function NewOffer() {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (formData) => {
    setLoading(true);

    createOffer(formData)
      .then((data) => {
        setLoading(false);
        console.log(data);
        history.push({
          pathname: `/admin/intercambio/from-offer/${data.offer_id}`,
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
            open={isLoading}
            values={initial_form}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
