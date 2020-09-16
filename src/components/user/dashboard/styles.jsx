import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    display: "flex",
  },
  center: {
    justifyContent: "center",
  },
  arrow: {
    display: "flex",
    margin: "25px",
    alignSelf: "center",
  },
}));
