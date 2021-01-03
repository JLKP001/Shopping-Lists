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

export const Header = ({ isDarkMode, setIsDarkMode }) => {
  const classes = useStyles();

  const handleChangeDarkMode = (event) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <ListAltIcon fontSize="large" className={classes.headerIcon} />
        <Typography variant="h6" className={classes.title}>
          Shopping Lists
        </Typography>
        <FormControlLabel
          control={
            <Switch checked={isDarkMode} onChange={handleChangeDarkMode} />
          }
          label="Dark Mode"
        />
      </Toolbar>
    </AppBar>
  );
};
