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
    color: "#221A1A",
    display: "flex",
    padding: theme.spacing(2),
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  button:{
    color:"#221A1A",
    backgroundColor:theme.palette.primary.main,
    
  },
  slider: {
    paddingBottom: 15
  }
}))