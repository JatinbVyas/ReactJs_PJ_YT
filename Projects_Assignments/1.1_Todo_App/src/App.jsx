import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";

function App() {
  const todolist = [
    {
      name: "Buy Milk",
      dueDate: "04/12/2025",
    },
    {
      name: "Go to College",
      dueDate: "04/12/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItemContainer todoItems={todolist}></TodoItemContainer>
    </center>
  );
}

export default App;
