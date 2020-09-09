// general
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// local
import { useStyles } from "../styles";
import EditPublicationForm from "./EditPublicationForm";
import { updatePublication, getPublication } from "../service";
import { openBackdrop, closeBackdrop } from "redux/ducks/_new_pub.duck";

// objeto para el formulario
const initial_form = {
  title: "",
  address: "",
  available: "one",
  description: "",
  status: "draft",
};

export default function EditPub() {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState(initial_form);

  const handleSubmit = (formData) => {
    // activamos el backdrop
    dispatch(openBackdrop(true));

    updatePublication(formData, id)
      .then((data) => {
        dispatch(closeBackdrop(false));
        history.replace({
          pathname: "admin/publicaciones",
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getPublication(id).then((data) => setValues(data.pub));
  }, [id]);

  if (values.title === "") return <p>Cargando Formulario...</p>;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EditPublicationForm
            style={classes.pubContainer}
            onSubmit={handleSubmit}
            values={values}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
