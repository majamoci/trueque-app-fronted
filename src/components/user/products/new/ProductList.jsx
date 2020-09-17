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
import { getSystemProducts } from "../service";

export default function Productlist({ onChange }) {
  const classes = useStyles();
  const [items, setItems] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick = (item, index) => {
    onChange(item);

    setSelectedIndex(index);
  };
  const setProducts = async () => {
    const items = await getSystemProducts();
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
          onClick={() => handleClick(item, index)}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name_sys_prod}
            secondary={item.name_gtgry}
          />
        </ListItem>
      ))}
    </List>
  );
}
