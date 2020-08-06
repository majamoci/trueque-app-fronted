// general
import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// material ui
import Grid from "@material-ui/core/Grid";
// local
import { isEmpty } from "utils";
import CardPub from "./CardPub";
import { useStyles } from "../styles";
import { Typography } from "@material-ui/core";

export default function TabPanel({ index, ...other }) {
  const classes = useStyles();
  const pubSt = useSelector((store) => store.publication.all);
  const tabValue = useSelector((store) => store.publication._pub_tab);

  // TODO: Encontrar la forma de que se muestre solo una vez
  const emptyPubs = (
    <div>
      <Typography component="p">¡Vaya! Esto está vacío.</Typography>
      <Typography component="p">
        ¡Date prisa y empieza a intercambiar!
      </Typography>
    </div>
  );
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
      {/* {tabValue.pos === index && emptyPubs} */}
      {tabValue.pos === index && (
        <Grid
          container
          spacing={2}
          className={clsx(isEmpty(publications) && "center")}
        >
          {isEmpty(publications) ? emptyPubs : publications}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
};
