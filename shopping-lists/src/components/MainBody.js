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
    { id: 1, name: "Chicken Rice" },
    { id: 2, name: "Fried Pork Chop" },
    { id: 3, name: "Baked Miso Cod" },
  ]);

  return (
    <div className={classes.root}>
      <Typography variant="h3">My Shopping List</Typography>
      <ItemList listData={listData} setListData={setListData} />
    </div>
  );
};
