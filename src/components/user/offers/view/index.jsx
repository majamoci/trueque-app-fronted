import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ProductCard from "./Card";
import SyncAltIcon from '@material-ui/icons/SyncAlt';
// import { getProducts } from "../service";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  arrow: {
    margin: '50px',
    // display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ShowProducts({ products }) {
  return products.map((item) => (
    <Grid item xs={12} sm={3} key={item.id}>
      {/* <ProductCard item={item} /> */}
    </Grid>
  ));
}

export default function ViewOffers() {
  const [items, setItems] = useState(null);
  const classes = useStyles();
  const setProducts = async () => {
    // const items = await getProducts();

    // setItems(items.products);
  };

  useEffect(() => {
    setProducts();
  }, []);

  // if (items === null) return <p>Cargando ofertas...</p>;
  // if (items === null) return <p>Cargando intercambios...</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/* <ShowProducts products={items} /> */}
        <ProductCard/>
          <Grid>
            <SyncAltIcon className={classes.arrow} fontSize ='large'/>
          </Grid>
        <ProductCard/>
        
      </Grid>
    </div>
  );
}
