import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Item } from "./Item";
import { generateId } from "../utils/generateId";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: theme.spacing(5),
    padding: theme.spacing(5),
    width: "50%",
    height: "100%",
  },
  addButton: {
    backgroundColor: `${
      theme.palette.type === "dark"
        ? theme.palette.grey[600]
        : theme.palette.grey[200]
    }`,
    borderRadius: "12px",
    padding: theme.spacing(1, 3),
    textTransform: "capitalize",
  },
}));

export const ItemList = ({ listData, setListData }) => {
  const classes = useStyles();

  const addItem = () => {
    setListData([
      {
        id: generateId(listData),
        name: "New Item",
        ingredients: [],
      },
      ...listData,
    ]);
  };

  const removeItem = (id) => {
    const newListData = listData.filter((item) => item.id !== id);
    setListData(newListData);
  };

  const renameItem = (id, newName) => {
    const newListData = listData.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        return { ...item, name: newName };
      }
    });
    setListData(newListData);
  };

  return (
    <Paper className={classes.root}>
      <Button className={classes.addButton} onClick={addItem}>
        <Typography variant="h6">+ add card</Typography>
      </Button>
      {listData.map((itemData) => {
        return (
          <Item
            key={itemData.id}
            itemData={itemData}
            removeItem={removeItem}
            renameItem={renameItem}
          />
        );
      })}
    </Paper>
  );
};
