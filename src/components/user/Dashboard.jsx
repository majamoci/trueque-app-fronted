// general
import React, { useEffect } from "react";
// material ui
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// local
import ViewOffers from "./dashboard/ViewOffers";

export default function UDashboard() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* Ver ofertas */}
        <Grid item xs={12} md={4}>
          <ViewOffers />
        </Grid>
      </Grid>
    </Container>
  );
}
