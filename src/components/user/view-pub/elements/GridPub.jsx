import React from "react";
import Grid from "@material-ui/core/Grid";
import CardPub from "./CardPub";
import TabActive from "./TabActive";
export default function GridPub({ data }) {
  return (
    <Grid container spacing={2}>
      <Grid item  xs={12} md={3}>
          <TabActive/>
        </Grid>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} md={3}>
          <CardPub detail={item} />
        </Grid>
      ))}
    </Grid>
  );
}
