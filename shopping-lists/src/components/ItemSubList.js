import React from "react";
import { List } from "@material-ui/core";
import { SubItem } from "./SubItem";

export const ItemSubList = ({
  parentId,
  items,
  editSubItem,
  removeSubItem,
}) => {
  const onItemChange = (event, field, subId) => {
    const subItem = items.find((item) => item.id === subId);

    let newSubItem = {};
    if (field === "checked") {
      newSubItem = { ...subItem, [field]: event.target.checked };
    } else {
      newSubItem = { ...subItem, [field]: event.target.value };
    }

    editSubItem(parentId, subId, newSubItem);
  };

  return (
    <List component="nav">
      {items.map((item) => {
        return (
          <SubItem
            key={item.id}
            item={item}
            parentId={parentId}
            onItemChange={onItemChange}
            removeSubItem={removeSubItem}
          />
        );
      })}
    </List>
  );
};
