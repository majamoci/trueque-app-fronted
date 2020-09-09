import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import { categories } from "components/user/shared/categories";

export default function ProductCard({ item }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  // const { id, name, category, price } = item;

  const transformCat = (category) => {
    const cat = categories.find((item) => item.value === category);
    return cat.label;
  };

  const handleEdit = (id) => {
    history.replace({ pathname: `${path}/${id}` });
  };

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {/* {transformCat(category)} */} CATEGORIA
        </Typography>
        <Typography variant="h5" component="h2">
          {/* {name} */}
        </Typography>
        {/* <Typography color="textSecondary">$ {price}</Typography> */} $10
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label="edit" onClick={() => handleEdit(id)}> */}
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
