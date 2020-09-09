// general
import React, { useEffect, useState } from "react";
// material ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
// local
import { useStyles } from "../styles";
import { getProducts } from "components/user/products/service";

export default function Productlist({ onChange }) {
  const classes = useStyles();
  const [items, setItems] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleClick = (id, index) => {
    onChange(id);

    setSelectedIndex(index);
  };
  const setProducts = async () => {
    const items = await getProducts();
    setItems(items.products);
  };

  useEffect(() => {
    setProducts();
  }, []);

  if (items === null) return <p>Cargando productos...</p>;

  return (
    <List className={classes.list}>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          button
          selected={selectedIndex === index}
          onClick={() => handleClick(item.id, index)}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.category} />
        </ListItem>
      ))}
    </List>
  );
}
