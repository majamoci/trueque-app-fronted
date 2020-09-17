import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  price: {
    float: "right",
  },
  media: {
    height: 140,
  },
  text: {
    display: "flex",
    alignItems: "center",
  },
});

export default function PubCard({ item }) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => alert("Hola")}>
        <CardMedia
          className={classes.media}
          //image={`${process.env.REACT_APP_API_URI}storage/${item.photos[0].path}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            {item.title}
          </Typography>
          <Typography
            className={classes.price}
            color="textSecondary"
            component="span"
            gutterBottom
          >
            {"$ "}
            {item.price}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.text}
          >
            <TrackChangesIcon />
            &nbsp;
            <span>A 543m de distancia</span>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.text}
          >
            <CheckCircleIcon />
            &nbsp;
            <span>Disponible</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
