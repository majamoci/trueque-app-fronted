import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { useStyles } from "../styles";
import { DialogContent } from "@material-ui/core";
import { getPublication } from "components/user/publications/service";
import { isEmpty } from "utils";

export default function AcceptDialog({ onClose, trueque_id, pub_id, open }) {
  const classes = useStyles();
  const [value, setValue] = useState({});

  const handleClose = () => {
    onClose(false);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(() => {
    getPublication(pub_id).then((data) => setValue(data.pub));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <DialogContent>
        <p>
          {isEmpty(value) && "Cargando"}
          {!isEmpty(value) && value.id}
        </p>
      </DialogContent>
    </Dialog>
  );
}

AcceptDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  pub_id: PropTypes.number.isRequired,
  trueque_id: PropTypes.number.isRequired,
};
