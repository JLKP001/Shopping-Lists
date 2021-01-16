import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { ItemList } from "./ItemList";
import data from "../defaultData";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.main,
    textAlign: "center",
  },
}));

export const MainBody = () => {
  const classes = useStyles();
  const [listData, setListData] = useState(data);

  return (
    <div className={classes.root}>
      <ItemList listData={listData} setListData={setListData} />
    </div>
  );
};
