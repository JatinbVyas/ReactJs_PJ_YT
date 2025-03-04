import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";
import { useState } from "react";
import WelcomeMsg from "./components/WelocomMsg";
import TodoItemsContext from "./store/todo-items-store";

function App() {
  const InitialTodolist = [];

  const [todolist, settodolist] = useState(InitialTodolist);

  const addNewItem = (itemName, dueDate) => {
    console.log("New items is::", itemName, dueDate);
    settodolist((currValue) => {
      const newtodoItem = [...currValue, { name: itemName, dueDate: dueDate }];
      return newtodoItem;
    });
  };

  const deleteItem = (deleteItemName) => {
    const newTodoItems = todolist.filter(
      (item) => item.name !== deleteItemName
    );
    settodolist(newTodoItems);
    console.log("Delete item come for is::", deleteItemName);
  };

  return (
    /**
     * Here we learning new concept of Context Provider or we can say Context API
     * Context API is one kind of storage from any component can access data that is stored in it.
     * For we created one file in src/store/todo-items-store.jsx and export it.
     * we can define as below <TodoItemsContext.Provider value={[]}></TodoItemsContext.Provider> so all thew component
     * that comes under this can access that context provider value. we need pass value prop to context provider itself also.
     *
     * Now we seen that state variable can directly pass to context provider and this way we can use context provide API
     * with state variable. Whenever state variable updates it pass new value to all components with the use of context provider value attribute.
     *
     * Again we learn new concept in context API is that , we can pass fuctions props also as context provider value.
     * Context provider can send any thing, it could be value, array, method anything.
     * So here we passed in one JS objecxt first is array of todo items, second is function of addnewitem and third is function of
     * deleteitem.
     * so now both fucntions no need to pass as props in component addtodo and todocontainer.
     *
     * So at the end all three value itemlist , add function and del function we were passing thourgh props instead of this now we store it in context provider and pass it thourgh value attr.
     */
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
