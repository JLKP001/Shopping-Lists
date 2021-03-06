import React from "react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { ItemSubList } from "./ItemSubList";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1),
  },
  itemTitle: {
    display: "flex",
    flexDirection: "row",
  },
  itemTitleText: {
    fontSize: "20pt",
    border: "none",
    textTransform: "capitalize",
    backgroundColor: "transparent",
    color: "inherit",
  },
  deleteButton: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": { color: theme.palette.secondary.main },
  },
  deleteIcon: {
    fontSize: "14pt",
  },
  addButton: {
    backgroundColor: `${
      theme.palette.type === "dark"
        ? theme.palette.grey[600]
        : theme.palette.grey[200]
    }`,
    borderRadius: "12px",
    padding: theme.spacing(0.5, 1.5),
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
  },
}));

export const Item = ({
  itemData,
  removeItem,
  renameItem,
  addSubItem,
  editSubItem,
  removeSubItem,
}) => {
  const classes = useStyles();

  const onNameChange = (event) => {
    renameItem(itemData.id, event.target.value);
  };

  return (
    <Card className={classes.root} elevation={5}>
      <div className={classes.itemTitle}>
        <Grid container alignItems="center">
          <Grid item>
            <CardContent>
              <input
                type="text"
                value={itemData.name}
                onChange={onNameChange}
                className={classes.itemTitleText}
                size={12}
              />
            </CardContent>
          </Grid>
          <Grid item xs></Grid>
          <Grid item>
            <IconButton
              className={classes.deleteButton}
              onClick={() => removeItem(itemData.id)}
            >
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <Button
        className={classes.addButton}
        onClick={() => {
          addSubItem(itemData.id);
        }}
      >
        <Typography variant="subtitle2">+ add item</Typography>
      </Button>

      <ItemSubList
        parentId={itemData.id}
        items={itemData.subList}
        editSubItem={editSubItem}
        removeSubItem={removeSubItem}
      />
    </Card>
  );
};
