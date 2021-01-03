import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { Item } from "./Item";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: theme.spacing(5),
    padding: theme.spacing(5),
    width: "50%",
    height: "100%",
  },
}));

export const ItemList = ({ listData, setListData }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {listData.map((itemData) => {
        return <Item key={itemData.id} itemData={itemData} />;
      })}
    </Paper>
  );
};
