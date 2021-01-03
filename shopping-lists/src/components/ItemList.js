import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: theme.spacing(5),
    padding: theme.spacing(5),
    width: "50%",
    height: "100%",
  },
}));

export const ItemList = () => {
  const classes = useStyles();
  return <Paper className={classes.root}>My List</Paper>;
};
