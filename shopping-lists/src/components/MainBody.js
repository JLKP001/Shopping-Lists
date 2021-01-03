import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

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
      <Typography variant="h3">Main Body</Typography>
    </div>
  );
};
