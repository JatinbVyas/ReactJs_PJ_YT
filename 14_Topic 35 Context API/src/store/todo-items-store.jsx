import { createContext } from "react";

const TodoItemsContext = createContext({
  itemData: [],
  addItem: () => {},
  delItem: () => {},
});

export default TodoItemsContext;
