import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItems
          todoItemName="Buy Milk"
          todoItemDate="04/12/2024"
        ></TodoItems>
        <TodoItems
          todoItemName="Go to college"
          todoItemDate="05/12/2024"
        ></TodoItems>
      </div>
    </center>
  );
}

export default App;
