import React from "react";
import {
  AppBar,
  FormControlLabel,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles((theme) => ({
  headerIcon: { paddingRight: theme.spacing(1.5) },
  title: { flexGrow: 1 },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <ListAltIcon fontSize="large" className={classes.headerIcon} />
        <Typography variant="h6" className={classes.title}>
          Shopping Lists
        </Typography>
        <FormControlLabel control={<Switch />} label="Dark Mode" />
      </Toolbar>
    </AppBar>
  );
};
