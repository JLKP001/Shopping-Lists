import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
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

export const ItemSubList = ({ parentId, items, editSubItem }) => {
  const classes = useStyles();

  const onItemChange = (event, field, subId) => {
    const subItem = items.find((item) => item.id === subId);
    const newSubItem = { ...subItem, [field]: event.target.value };

    editSubItem(parentId, subId, newSubItem);
  };

  return (
    <List component="nav">
      {items.map((item) => {
        return (
          <ListItem key={item.id} className={classes.listItem}>
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
                  control={<Checkbox color="primary" />}
                  label="Purchased"
                  labelPlacement="start"
                />
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
};
