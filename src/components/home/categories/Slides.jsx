import Axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import PubCard from "./Card";
import { useStyles } from "../styles";

export default function Slides({ category }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URI}api/publications/${category}`;

    Axios.get(url)
      .then((response) => response.data)
      .then((data) => {
        setData(data.publications)
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Obteniendo información...</div>;

  return (
    <div className={classes.slider}>
      <Grid container spacing={2}>
        {data &&
          data.map((item) => (
            <Grid item key={item.pub_id} xs={12} sm={3}>
              <PubCard item={item}></PubCard>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
