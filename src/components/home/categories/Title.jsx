// general
import React from "react";
// material ui
import Typography from "@material-ui/core/Typography";
// local
import { useStyles } from "../styles";

export default function Title({ title, emoji }) {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography component="span" variant="h4">
        {title}
      </Typography>
      <Typography component="span" variant="h4">
        <span role="img" aria-label="fruit">
          {emoji}
        </span>
      </Typography>
    </div>
  );
}
