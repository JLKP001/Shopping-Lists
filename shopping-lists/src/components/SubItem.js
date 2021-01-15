import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  ListItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    "&:hover": { backgroundColor: theme.palette.grey[500] },
  },
  itemName: {
    fontSize: "20px",
    border: "none",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    color: "inherit",
  },
  itemQuantity: {
    textAlign: "center",
    fontSize: "16px",
    border: "none",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    color: "inherit",
  },
  itemCheckbox: {
    textAlign: "right",
  },
}));

export const SubItem = ({ item, onItemChange }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <Grid container alignItems="center">
        <Grid item sm={4}>
          <input
            type="text"
            value={item.name}
            onChange={(e) => onItemChange(e, "name", item.id)}
            className={classes.itemName}
            size={10}
          />
        </Grid>
        <Grid item sm className={classes.itemQuantity}>
          <input
            type="text"
            value={item.quantity}
            onChange={(e) => onItemChange(e, "quantity", item.id)}
            className={classes.itemQuantity}
            size={3}
          />
        </Grid>
        <Grid item sm={4} className={classes.itemCheckbox}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={item.checked}
                onChange={(e) => onItemChange(e, "checked", item.id)}
              />
            }
            label="Purchased"
            labelPlacement="start"
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};
