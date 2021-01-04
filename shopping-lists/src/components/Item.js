import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ItemSubList } from "./ItemSubList";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
  },
  itemTitle: {
    display: "flex",
    flexDirection: "row",
  },
  itemTitleText: {
    textTransform: "capitalize",
  },
  editButton: {
    marginRight: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": { color: theme.palette.primary.main },
  },
  deleteButton: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": { color: theme.palette.secondary.main },
  },
}));

export const Item = ({ itemData }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <div className={classes.itemTitle}>
        <Grid container alignItems="center">
          <Grid item>
            <CardContent>
              <Typography variant="h4" className={classes.itemTitleText}>
                {itemData.name}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton className={classes.editButton}>
              <EditIcon />
            </IconButton>
            <IconButton className={classes.deleteButton}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <ItemSubList items={itemData.ingredients} />
    </Card>
  );
};
