const { makeStyles } = require("@material-ui/core");

const sizeAvatar = 64;
export const useStyles = makeStyles((theme) => ({
  relative: {
    width: sizeAvatar,
    height: sizeAvatar,
    left: sizeAvatar / 4,
    bottom: sizeAvatar / 2 + 6,
    position: "relative",
  },
  imageBox: {
    maxWidth: 345,
  },
  image: {
    width: "100%",
  },
  text: {
    display: "flex",
    alignItems: "center",
  },
}));
