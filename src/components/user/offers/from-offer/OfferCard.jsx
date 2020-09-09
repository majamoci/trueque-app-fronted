import React, { useState, useEffect } from "react";
import { getOffer } from "../service";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../styles";

const initial_value = {
  id: null,
  user_id: null,
  product_id: null,
  address: "",
  description: "",
};

export default function OfferCard({ id }) {
  const classes = useStyles()
  const [offer, setOffer] = useState(initial_value);

  useEffect(() => {
    getOffer(id).then((data) => setOffer(data.offer));
  }, [id]);

  if(offer.address === "") return <p>Cargando oferta...</p>;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${process.env.REACT_APP_API_URI}storage/${offer.photos[0].path}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            {offer.product.name}
          </Typography>
          <Typography color="textSecondary" component="p" gutterBottom>
            {offer.product.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {offer.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
