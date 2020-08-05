import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
  logo: {
    width: "75%",
  },
  info: {
    position: "sticky",
    top: theme.spacing(4)
  },
  title: {
    width: "100%",
    color: "white",
    display: "flex",
    padding: theme.spacing(2),
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  }
}))