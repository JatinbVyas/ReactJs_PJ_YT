import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";
import WelcomeMsg from "./components/WelocomMsg";
import { TodoItemContextProvider } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg></WelcomeMsg>
        <TodoItemContainer></TodoItemContainer>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
