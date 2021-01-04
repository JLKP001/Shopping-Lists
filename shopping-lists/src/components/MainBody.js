import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ItemList } from "./ItemList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    textAlign: "center",
    padding: theme.spacing(5),
  },
}));

export const MainBody = () => {
  const classes = useStyles();
  const [listData, setListData] = useState([
    {
      id: 1,
      name: "Chicken Rice",
      ingredients: [
        { id: "1", name: "rice", quantity: "250g" },
        { id: "2", name: "chicken", quantity: "1kg" },
        { id: "3", name: "salt", quantity: "30g" },
      ],
    },
    {
      id: 2,
      name: "Fried Pork Chop",
      ingredients: [
        { id: "1", name: "pork shoulder", quantity: "500g" },
        { id: "2", name: "corn flour", quantity: "120g" },
        { id: "3", name: "breadcrumbs", quantity: "200g" },
      ],
    },
    {
      id: 3,
      name: "Baked Miso Cod",
      ingredients: [
        { id: "1", name: "Cod fillet", quantity: "330g" },
        { id: "2", name: "miso", quantity: "80g" },
        { id: "3", name: "mirin", quantity: "150ml" },
      ],
    },
  ]);

  return (
    <div className={classes.root}>
      <Typography variant="h3">My Shopping List</Typography>
      <ItemList listData={listData} setListData={setListData} />
    </div>
  );
};
