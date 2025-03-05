import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";
import { useState } from "react";
import WelcomeMsg from "./components/WelocomMsg";
import TodoItemsContext from "./store/todo-items-store";
import { useReducer } from "react";

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
  }
  return newtodoItem;
};

function App() {
  const InitialTodolist = [];

  //const [todolist, settodolist] = useState(InitialTodolist);
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
    const newTodoItems = todolist.filter(
      (item) => item.name !== deleteItemName
    );
    settodolist(newTodoItems);
    console.log("Delete item come for is::", deleteItemName);
  };

  return (
    <TodoItemsContext.Provider
      value={{ itemData: todolist, addItem: addNewItem, delItem: deleteItem }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItemContainer></TodoItemContainer>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
