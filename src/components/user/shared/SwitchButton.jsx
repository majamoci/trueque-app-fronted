import React, { useState } from "react";
import PropTypes from "prop-types";
import { Switch, makeStyles, Typography, Grid } from "@material-ui/core";

const useStylesSw = makeStyles((theme) => ({
  root: {
    width: 150,
    height: 35,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[100],
    backgroundColor: theme.palette.primary.main,
    "&$checked": {
      transform: "translateX(106px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 40,
    height: 31,
    boxShadow: "none",
    borderRadius: 16 / 2,
  },
  track: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 16 / 2,
    opacity: 1,
  },
  checked: {},
}));

const useStyles = makeStyles((theme) => ({
  name: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function SwitchButton({ title, value, onChange }) {
  const sw = useStylesSw();
  const classes = useStyles();
  const [option, setOption] = useState({
    value,
    title: "Uno",
    checked: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const title = checked ? "Varios" : "Uno";
    const value = checked ? "multiple" : "one";

    setOption({ title, value, checked });
    onChange({
      target: { name, value },
    });
  };

  return (
    <>
      <Typography component="span" variant="caption" color="textSecondary">
        {title}
      </Typography>
      <Typography component="div">
        <Grid component="label" container spacing={1}>
          <Grid item>
            <Switch
              classes={sw}
              checked={option.checked}
              onChange={handleChange}
              value={option.value}
              name="available"
            />
          </Grid>
          <Grid item className={classes.name}>
            {option.title}
          </Grid>
        </Grid>
      </Typography>
    </>
  );
}

SwitchButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
