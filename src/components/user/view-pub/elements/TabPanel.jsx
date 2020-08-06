// general
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
// material ui
import { Grid } from "@material-ui/core";
// local
import { isEmpty } from "utils";
import CardPub from "./CardPub";
import { useStyles } from "../styles";

const intercambiados = [
  {
    img: "https://source.unsplash.com/1600x900/?weekly=water",
    title: "Titulo-intercambios",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Titulo-intercambioa",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?animals,coffee",
    title: "Titulo-intercambios",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
  {
    img: "https://source.unsplash.com/1600x900/?comics,heroes",
    title: "Titulo-intercambios",
    price: 12.32,
    category: "FRUT",
    button: <button>Click me!</button>,
  },
];

export default function TabPanel({ index, ...other }) {
  const classes = useStyles();
  const pubSt = useSelector((store) => store.publication.all);
  const tabValue = useSelector((store) => store.publication._pub_tab);

  const publications =
    !isEmpty(pubSt.data) &&
    pubSt.data.publications.map((item) => {
      return (
        <Grid key={item.id} item xs={12} md={3}>
          <CardPub detail={item} />
        </Grid>
      );
    });

  return (
    <div
      role="tabpanel"
      className={classes.w100}
      hidden={tabValue.pos !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {tabValue.pos === index && (
        <Grid container spacing={2}>
          {publications}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
};
