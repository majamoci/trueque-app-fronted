// general
import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
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
import { deletePublication } from "../service";

function formatAvailability(s) {
  return s === "one" ? "Uno" : "Varios";
}

export default function CardPub({ pub }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const classes = useStyles();
  const category = categories.find((item) => item.value === pub.category);
  const handleEdit = (id) => {
    history.replace({ pathname: `${path}/${id}` });
  };
  const handleRemove = (id) => {
    if (window.confirm("Desea eliminar esa publicación!")) {
      deletePublication(id).then((data) => console.log(data));
    }
  };
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
            {pub.title}
          </Typography>
          <Typography color="textSecondary" component="p" gutterBottom>
            {formatAvailability(pub.available)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {category.label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          aria-label="detalle"
          title="Detalle"
          size="small"
          onClick={() => handleEdit(pub.id)}
        >
          <DetailsIcon />
        </IconButton>
        <IconButton
          aria-label="eliminar"
          title="Eliminar"
          size="small"
          onClick={() => handleRemove(pub.id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
