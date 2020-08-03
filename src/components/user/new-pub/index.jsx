import React from "react";
import { useDispatch } from "react-redux";
import fetchCreatePub from "../../../redux/actions/publications/create.action";
import NewPublication from "./forms/NewPublishForm";
import { Container, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (formData) => { 
    dispatch(fetchCreatePub(formData)) 

    history.replace({
      pathname: "./publicaciones",
    });
    

  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        </Grid>
        <Grid item xs={12} md={8}>
          <NewPublication style={{padding: 40}} onSubmit={handleSubmit} values={initial_form} />
        </Grid>
      </Grid>
    </Container>
  );
}
