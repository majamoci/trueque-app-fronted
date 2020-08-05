// general
import React from "react";
// material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// local
import InfoPlatform from "./Info";
import Categories from "./categories";
import { useStyles } from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" classes={{root: classes.container}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <InfoPlatform />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Categories />
        </Grid>
      </Grid>
    </Container>
  );
}
