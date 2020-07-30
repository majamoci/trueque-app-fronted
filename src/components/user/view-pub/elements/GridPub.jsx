import React from "react";
import Grid from "@material-ui/core/Grid";
import CardPub from "./CardPub";

export default function GridPub({ data }) {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} md={3}>
          <CardPub detail={item} />
        </Grid>
      ))}
    </Grid>
  );
}
