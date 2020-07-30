import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Categories from "./categories";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Categories />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
      <Link to="/login">Ingresar</Link>
    </Container>
  );
}
