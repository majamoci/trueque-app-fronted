const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 150,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  price: {
    float: "right",
  },
  media: {
    height: 140,
  },
  w100: {
    width: "100%",
  },
}));
