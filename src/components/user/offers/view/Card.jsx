import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { categories } from "components/user/shared/categories";
import { getPublication } from "components/user/publications/service";
import { isEmpty } from "utils";
import { getOffer } from "../service";
import AcceptDialog from "./AcceptDialog";

export default function ProductCard({ item, type, from }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [value, setValue] = useState({});
  const [open, setOpen] = useState(false);

  const transformCat = (category) => {
    const cat = categories.find((item) => item.value === category);
    return cat.label;
  };

  const transactions = () => {
    if (from === "pub") {
      return type === "pub" ? "Por" : "Cambia";
    } else if (from === "offer") {
      return type === "pub" ? "Por" : "Cambio";
    }
  };

  /**
   * Permite que solo los botones que no son del usuario tengan interaccion
   * utilizando la compuerta XOR (A + B) . (!A + !B)
   */
  const xor =
    (from === "pub" || type === "pub") &&
    (from === "offer" || type === "offer");

  const handleView = (value) => {
    if (!isEmpty(value) && xor) {
      setOpen(true);
    }
  };
  const handleClose = (value) => setOpen(value);

  useEffect(() => {
    if (type === "pub") {
      getPublication(item.pub_id).then((data) => setValue(data.pub.product));
    } else if (type === "offer") {
      getOffer(item.offer_id).then((data) => setValue(data.offer.product));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        <CardActionArea onClick={() => handleView(value)}>
          <CardContent>
            <Typography color="secondary" gutterBottom>
              {isEmpty(value) && "Cargando"}
              {!isEmpty(value) && transactions()}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {isEmpty(value) && "Cargando"}
              {!isEmpty(value) && transformCat(value.category)}
            </Typography>
            <Typography variant="h5" component="h2">
              {isEmpty(value) && "Cargando"}
              {!isEmpty(value) && value.name}
            </Typography>
            <Typography color="textSecondary">
              {isEmpty(value) && "Cargando"}
              {!isEmpty(value) && `$ ${value.price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <AcceptDialog
        trueque_id={item.id}
        pub_id={item.pub_id}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
