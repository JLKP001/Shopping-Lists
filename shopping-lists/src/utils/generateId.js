export const generateId = (itemList) => {
  const ids = itemList.map((item) => item.id);

  if (ids === undefined || ids.length === 0) {
    return 0;
  }

  return Math.max(...ids) + 1;
};
