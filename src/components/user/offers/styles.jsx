import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper,
  //   display: "flex",
  // },
  // tabs: {
  //   borderRight: `1px solid ${theme.palette.divider}`,
  // },
  media: {
    height: 140,
  },
  // w100: {
  //   width: "100%",
  // },
  // button: {
  //   marginTop: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  // },
  // actionsContainer: {
  //   marginBottom: theme.spacing(2),
  // },
  // resetContainer: {
  //   padding: theme.spacing(3),
  // },
  // pubContainer: {
  //   padding: 40,
  // },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  // list: {
  //   width: "100%",
  //   maxWidth: 360,
  //   maxHeight: 216,
  //   overflow: "auto",
  //   backgroundColor: theme.palette.background.paper,
  // },
}));
