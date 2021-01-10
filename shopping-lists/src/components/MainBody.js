import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { ItemList } from "./ItemList";
import data from "../defaultData";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    textAlign: "center",
    padding: theme.spacing(5),
  },
}));

export const MainBody = () => {
  const classes = useStyles();
  const [listData, setListData] = useState(data);

  return (
    <div className={classes.root}>
      <Typography variant="h3">My Shopping List</Typography>
      <ItemList listData={listData} setListData={setListData} />
    </div>
  );
};
