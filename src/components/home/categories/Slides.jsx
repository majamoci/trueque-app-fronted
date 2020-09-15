import Axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import PubCard from "./Card";
import { useStyles } from "../styles";

export default function Slides({ category }) {
  const classes = useStyles();
  const [pubs, setPubs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URI}api/publications/category/${category}`;

    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        setPubs(data.pubs);
        setLoading(false);
      })
      .catch((e) => console.error(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Obteniendo información...</div>;

  return (
    <div className={classes.slider}>
      <Grid container spacing={2}>
        {pubs &&
          pubs.map((item) => (
            <Grid item key={item.id} xs={12} sm={3}>
              <PubCard item={item}></PubCard>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
