// general
import React from "react";
// material ui
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// local
import InfoPlatform from "./Info";
import { useStyles } from "./styles";
import IndexCarousel from "./carousel/IndexCarousel"
import Categories from "./categories";

export default function Home() {
  const classes = useStyles();
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Container maxWidth="lg" classes={{root: classes.container}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <InfoPlatform />
        </Grid>
        <Grid  item xs={12} sm={9}>
          <IndexCarousel  slides={slides}/>
          <br/>
          <Categories />
        </Grid>
      </Grid>
    </Container>
  );
}
