
// geneeal
import clsx from "clsx";
import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
// material UI
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// local
import { useStyles } from "./styles";
import { closeDrawer } from "redux/actions/drawer.action";

const Links = ({ items }) => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const handleClick = (route) => {
    history.replace({
      pathname: `${path}${route}`,
    });
  };

  return (
    <List>
      {items.map((item) => (
        <React.Fragment key={item.text}>
          <ListItem button onClick={() => handleClick(item.link)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

export default function DrawerTemplate({ list }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerStore = useSelector((state) => state.auth.drawer);

  const handleDrawerClose = () => {
    dispatch(closeDrawer(false));
  };

  return (
    <Drawer
      variant="permanent"
      open={drawerStore.open}
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !drawerStore.open && classes.drawerPaperClose
        ),
      }}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Links items={list} />
      <Divider />
    </Drawer>
  );
}

DrawerTemplate.propTypes = {
  list: PropTypes.array.isRequired,
}
