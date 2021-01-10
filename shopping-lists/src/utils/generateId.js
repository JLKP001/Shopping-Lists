export const generateId = (itemList) => {
  const ids = itemList.map((item) => item.id);
  return Math.max(...ids) + 1;
};
