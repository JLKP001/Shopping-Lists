import React from "react";
import {
  Checkbox,
  Grid,
  IconButton,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1vw",
    paddingTop: "0px",
    paddingBottom: "0px",
    "&:hover": { backgroundColor: theme.palette.grey[500] },
  },
  itemName: {
    fontSize: "14px",
    border: "none",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    color: "inherit",
  },
  itemQuantity: {
    textAlign: "center",
    fontSize: "12px",
    border: "none",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    color: "inherit",
  },
  itemCheckbox: {
    textAlign: "left",
  },
}));

export const SubItem = ({ item, parentId, onItemChange, removeSubItem }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <Grid container alignItems="center">
        <Grid item className={classes.itemCheckbox}>
          <Checkbox
            color="primary"
            checked={item.checked}
            onChange={(e) => onItemChange(e, "checked", item.id)}
          />
        </Grid>
        <Grid item>
          <input
            type="text"
            value={item.name}
            onChange={(e) => onItemChange(e, "name", item.id)}
            className={classes.itemName}
            size={10}
          />
        </Grid>
        <Grid item xs className={classes.itemQuantity}>
          <input
            type="text"
            value={item.quantity}
            onChange={(e) => onItemChange(e, "quantity", item.id)}
            className={classes.itemQuantity}
            size={3}
          />
        </Grid>

        <Grid item>
          <IconButton
            color="secondary"
            onClick={() => {
              removeSubItem(parentId, item.id);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};
