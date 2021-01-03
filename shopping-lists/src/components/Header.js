import React from "react";
import {
  AppBar,
  FormControlLabel,
  Grid,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles((theme) => ({
  root: { transform: "translateZ(0)" },
  title: { display: "flex", flexDirection: "row" },
  titleIcon: { paddingRight: theme.spacing(1.5) },
}));

export const Header = ({ isDarkMode, setIsDarkMode }) => {
  const classes = useStyles();

  const handleChangeDarkMode = (event) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item className={classes.title}>
            <ListAltIcon fontSize="large" className={classes.titleIcon} />
            <Typography variant="h6">Shopping Lists</Typography>
          </Grid>
          <Grid item sm />
          <Grid item>
            <FormControlLabel
              control={
                <Switch checked={isDarkMode} onChange={handleChangeDarkMode} />
              }
              label="Dark Mode"
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
