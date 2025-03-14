import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";
import { useState } from "react";
import WelcomeMsg from "./components/WelocomMsg";

function App() {
  const InitialTodolist = [];

  const [todolist, settodolist] = useState(InitialTodolist);

  const handleNewItem = (itemName, dueDate) => {
    console.log("New items is::", itemName, dueDate);
    const newtodoItem = [...todolist, { name: itemName, dueDate: dueDate }];
    settodolist(newtodoItem);
  };

  const handleDeleteItem = (deleteItemName) => {
    const newTodoItems = todolist.filter(
      (item) => item.name !== deleteItemName
    );
    settodolist(newTodoItems);
    console.log("Delete item come for is::", deleteItemName);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todolist.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItemContainer
        todoItems={todolist}
        onDeleteClick={handleDeleteItem}
      ></TodoItemContainer>
    </center>
  );
}

export default App;
