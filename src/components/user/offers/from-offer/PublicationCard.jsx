import React, { useState, useEffect } from "react";
import { getPublication } from "../../publications/service";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../styles";

const initial_value = {
  id: null,
  user_id: null,
  product_id: null,
  address: "",
  description: "",
};

export default function PublicationCard({ id }) {
  const classes = useStyles();
  const [pub, setPub] = useState(initial_value);

  useEffect(() => {
    getPublication(5).then((data) => setPub(data.pub));
  }, [id]);

  if (pub.address === "") return <p>Cargando oferta...</p>;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${process.env.REACT_APP_API_URI}storage/${pub.photos[0].path}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            {pub.product.name}
          </Typography>
          <Typography color="textSecondary" component="p" gutterBottom>
            {pub.product.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pub.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
