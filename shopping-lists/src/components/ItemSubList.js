import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    "&:hover": { backgroundColor: theme.palette.grey[500] },
  },
  itemName: {
    textTransform: "capitalize",
  },
  itemQuantity: {
    textAlign: "center",
  },
  itemCheckbox: {
    textAlign: "right",
  },
}));

export const ItemSubList = ({ items }) => {
  const classes = useStyles();
  return (
    <List component="nav">
      {items.map((item) => {
        return (
          <ListItem key={item.id} className={classes.listItem}>
            <Grid container alignItems="center">
              <Grid item sm={4} className={classes.itemName}>
                <Typography variant="h6">{item.name}</Typography>
              </Grid>
              <Grid item sm className={classes.itemQuantity}>
                <Typography variant="subtitle1">{item.quantity}</Typography>
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
