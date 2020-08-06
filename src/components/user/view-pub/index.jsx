// general
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// material ui
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// local
import { useStyles } from "./styles";
import TabPanel from "./elements/TabPanel";
import { changeTab } from "../../../redux/ducks/_pub_tab.duck";
import fetchPubs from "../../../redux/actions/publications/publications.action";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TabActive() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tabValue = useSelector((store) => store.publication._pub_tab);
  const status = ["published", "draft", "complete"];

  const handleChange = (event, pos) => {
    dispatch(changeTab({ pos, status: status[pos] }));
  };

  useEffect(() => {
    dispatch(fetchPubs(tabValue.status));
  }, [dispatch, tabValue.status]);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        textColor="primary"
        background="primary"
        value={tabValue.pos}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="PUBLICADAS" {...a11yProps(0)} />
        <Tab label="BORRADORES" {...a11yProps(1)} />
        <Tab label="INTERCAMBIOS" {...a11yProps(2)} />
      </Tabs>
      <TabPanel index={0} />
      <TabPanel index={1} />
      <TabPanel index={2} />
    </div>
  );
}
