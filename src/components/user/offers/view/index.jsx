import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./Card";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import { useStyles } from "../styles";
import { getTransactions } from "../service";
import { Typography } from "@material-ui/core";

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
  const [itemsO, setItemsO] = useState([]);
  const [itemsP, setItemsP] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getTransactions("offers").then((data) => setItemsO(data.by_offers));
    getTransactions("pubs").then((data) => setItemsP(data.by_pubs));
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h1">
        Tus ofertas
      </Typography>
      <Grid container spacing={2}>
        {itemsO.length === 0 && <p>Cargando ofertas...</p>}
        {itemsO.length !== 0 && (
          <ShowTransactions items={itemsO} from="offer" />
        )}
      </Grid>
      <Typography variant="h3" component="h1">
        Ofertas a tus productos
      </Typography>
      <Grid container spacing={2}>
        {itemsP.length === 0 && <p>Cargando publicaciones...</p>}
        {itemsP.length !== 0 && <ShowTransactions items={itemsP} from="pub" />}
      </Grid>
    </div>
  );
}
