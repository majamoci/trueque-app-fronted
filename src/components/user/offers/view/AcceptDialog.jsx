import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import { useStyles } from "../styles";
import { DialogContent, Button, ButtonGroup } from "@material-ui/core";
import { getPublication } from "components/user/publications/service";
import { isEmpty } from "utils";
import { getUser } from "components/user/service";
import { changeStatus } from "../service";

export default function AcceptDialog({
  onClose,
  trueque_id,
  pub_id,
  from,
  open,
}) {
  // const classes = useStyles();
  const [value, setValue] = useState({});
  const [activeButtons, setActiveButtons] = useState(from);
  const [user_value, setUserValue] = useState({});

  const handleClose = () => {
    onClose(false);
  };

  const handleSubmit = (status) => {
    changeStatus({
      trueque_id,
      status,
    }).then((data) => {
      console.log(data.message);
      onClose(false);
      setActiveButtons(false);
    });
  };

  useEffect(() => {
    getPublication(pub_id)
      .then((data) => {
        setValue(data.pub);
        return data.pub;
      })
      .then((data) => {
        getUser(data.user_id).then((user_data) =>
          setUserValue(user_data.profile)
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Datos del producto</DialogTitle>
      <DialogContent>
        <p>
          {isEmpty(value) && "Cargando"}
          {!isEmpty(value) && value.title}
        </p>
        <p>
          {isEmpty(value) && "Cargando"}
          {!isEmpty(value) && value.address}
        </p>
        <p>
          {isEmpty(value) && "Cargando"}
          {!isEmpty(value) && value.description}
        </p>
        <p>
          {isEmpty(value) && "Cargando"}
          {/* {!isEmpty(value) && value.photos} */}
        </p>
        <p>
          {isEmpty(value) && "Cargando"}
          {!isEmpty(value) && value.product.name}
        </p>
        <p>
          {isEmpty(user_value) && "Cargando"}
          {!isEmpty(user_value) && user_value.name}
        </p>
        <p>
          {isEmpty(user_value) && "Cargando"}
          {!isEmpty(user_value) && user_value.telephone}
        </p>
        <p>
          {isEmpty(user_value) && "Cargando"}
          {!isEmpty(user_value) && user_value.mobile}
        </p>
        {activeButtons && (
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit("traded")}
            >
              Aceptar
            </Button>
            <Button
              variant="contained"
              color="inherit"
              onClick={() => handleSubmit("rejected")}
            >
              Rechazar
            </Button>
          </ButtonGroup>
        )}
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
