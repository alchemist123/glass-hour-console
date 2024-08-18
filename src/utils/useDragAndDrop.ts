import { useState } from "react";

export const useDragAndDrop = (initialState) => {
  const [listItems, setListItems] = useState(initialState);

  const handleUpdateList = (id, status) => {
    let card = listItems.find((item) => item.id === id);
    card.status = status;
    setListItems((prev) => [card, ...prev.filter((item) => item.id !== id)]);
  };

  return {
    listItems,
    handleUpdateList,
  };
};
