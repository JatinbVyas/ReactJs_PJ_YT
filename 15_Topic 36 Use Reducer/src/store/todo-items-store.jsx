import { useReducer } from "react";
import { createContext } from "react";

const TodoItemsContext = createContext({
  itemData: [],
  addItem: () => {},
  delItem: () => {},
});

export default TodoItemsContext;

/**
 *
 * @param {this is the currentItem/currentValue of useState} currtodoItem
 * @param {this is the action object received when dispatch the item} action
 * @returns it returns the updated new value and that is directly set to your main variable that is define as first value in useReducer here it is todolist.
 * here in action method we received two object first one is current/existing value and action object.
 * so based on type we can define the login as we did earlier in useState.
 */
const todoItemReducer = (currtodoItem, action) => {
  let newtodoItem = currtodoItem;
  if (action.type === "NEW_ITEM") {
    newtodoItem = [
      ...currtodoItem,
      { name: action.payload.itemName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodoItem = currtodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newtodoItem;
};

export const TodoItemContextProvider = (props) => {
  /**
   * Here we learned new concept useReducer() hook.
   * This hook can be used instead of useState();
   * This useReducer take two items first is fucntion and second is your initial value.useReducer(todoItemReducer, []);
   * And it returns two value same as useState(), first is yout value and second is displatchObject/dispatchmethod instated of set method
   * for this we need to define one fucntion that handles the action and that fuction pass as first item in useReducer(todoItemReducer)
   * so when addNewItem function is called here we define one object in which we pass first type, it means what kind of action is this and payload as second in which our new item/value get passed.
   * and then dispatch method get called and pass this new object and this will called the action method todoItemReducer.
   */
  const [todolist, dispatchtodoList] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, dueDate },
    };

    dispatchtodoList(newItemAction);
  };

  const deleteItem = (deleteItemName) => {
    const deleteitemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: deleteItemName },
    };
    dispatchtodoList(deleteitemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{ itemData: todolist, addItem: addNewItem, delItem: deleteItem }}
    >
      {props.children}
    </TodoItemsContext.Provider>
  );
};
