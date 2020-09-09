import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
// import ProductCard from "./Card";
// import { getProducts } from "../service";

function ShowProducts({ products }) {
  return products.map((item) => (
    <Grid item xs={12} sm={3} key={item.id}>
      {/* <ProductCard item={item} /> */}
    </Grid>
  ));
}

export default function ViewOffers() {
  const [items, setItems] = useState(null);

  const setProducts = async () => {
    // const items = await getProducts();

    // setItems(items.products);
  };

  useEffect(() => {
    setProducts();
  }, []);

  if (items === null) return <p>Cargando ofertas...</p>;
  if (items === null) return <p>Cargando intercambios...</p>;

  return (
    <Grid container spacing={2}>
      <ShowProducts products={items} />
    </Grid>
  );
}
