import React, { forwardRef, useState } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditPublication from './forms/EditPublishForm';
import { useStyles } from "../shared/styles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initial_form = {
  title: "",
  price: 0,
  category: "",
  address: "",
  description: "",
  available: "one",
  active: "draft",
};

export default function Index() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Nueva publicación
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Guardar
          </Button>
        </Toolbar>
        <EditPublication
          _handleChange
          _handleSubmit={handleSubmit}
          values={initial_form}
        />
      </AppBar>
    </Dialog>
  );
}
