// general
import React, { useEffect, useState } from "react";
import clsx from "clsx";
// material ui
import Grid from "@material-ui/core/Grid";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Typography from "@material-ui/core/Typography";
// local
import { useStyles } from "./styles";
import ProductCard from "../offers/view/Card";
import { getTransactions } from "../offers/service";

function ShowTransactions({ items, from }) {
  const classes = useStyles();

  return items.map((item) => (
    <Grid item xs={12} md={6} key={item.id} className={classes.flex}>
      <ProductCard item={item} type="offer" from={from} />
      <SyncAltIcon
        className={clsx(classes.arrow, classes.center)}
        fontSize="large"
      />
      <ProductCard item={item} type="pub" from={from} />
    </Grid>
  ));
}

export default function ViewOffers() {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTransactions("pubs").then((data) => setItems(data.by_pubs));
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1">
        Ofertas a tus productos
      </Typography>
      <Grid container spacing={2}>
        {items.length === 0 && <p>Cargando publicaciones...</p>}
        {items.length !== 0 && <ShowTransactions items={items} from="pub" />}
      </Grid>
    </div>
  );
}
