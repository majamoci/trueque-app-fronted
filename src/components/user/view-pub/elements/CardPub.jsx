// general
import React from "react";
// material ui
import Card from "@material-ui/core/Card";
import DeleteIcon from "@material-ui/icons/Delete";
import CardMedia from "@material-ui/core/CardMedia";
import DetailsIcon from "@material-ui/icons/Details";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
// local
import { useStyles } from "../styles";
import { categories } from "../../shared/categories";

export default function CardPub({ detail }) {
  const classes = useStyles();
  const category = categories.find((item) => item.value === detail.category);
  
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${process.env.REACT_APP_API_URI}storage/${detail.photos[0].path}`}
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
            {category.label}
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
