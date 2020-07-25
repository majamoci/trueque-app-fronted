import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DetailsIcon from "@material-ui/icons/Details";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  price: {
    float: "right",
  },
  media: {
    height: 140,
  },
});

export default function CardPub({ detail }) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={detail.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            {detail.title}
          </Typography>
          <Typography
            className={classes.price}
            color="textSecondary"
            component="span"
            gutterBottom
          >
            {"$ "}
            {detail.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {detail.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="detalle" title="Detalle" size="small">
          <DetailsIcon />
        </IconButton>
        <IconButton aria-label="eliminar" title="Eliminar" size="small">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
