import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";
import { useState } from "react";

function App() {
  const InitialTodolist = [
    {
      name: "Buy Milk",
      dueDate: "04/12/2025",
    },
    {
      name: "Go to College",
      dueDate: "04/12/2025",
    },
  ];

  const [todolist, settodolist] = useState(InitialTodolist);

  const handleNewItem = (itemName, dueDate) => {
    console.log("New items is::", itemName, dueDate);
    const newtodoItem = [...todolist, { name: itemName, dueDate: dueDate }];
    settodolist(newtodoItem);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItemContainer todoItems={todolist}></TodoItemContainer>
    </center>
  );
}

export default App;
