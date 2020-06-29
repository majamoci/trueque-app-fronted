import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";

export default function MenuList({ list }) {
  const history = useHistory();

  const handleClick = (route) => {
    history.replace({
      pathname: route,
    });
  };

  return (
    <List>
      {list.map((item) => (
        <React.Fragment key={item.text}>
          <ListItem button onClick={() => handleClick(item.link)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}
