import React from "react";
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
  return (
    <div className={classes.root}>
      <Typography variant="h3">My Shopping List</Typography>
      <ItemList />
    </div>
  );
};
