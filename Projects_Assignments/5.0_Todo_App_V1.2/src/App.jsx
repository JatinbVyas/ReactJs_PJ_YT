import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";
import { useState } from "react";

function App() {
  // const todolist = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "04/12/2025",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "04/12/2025",
  //   },
  // ];

  const [todolist, settodolist] = useState([]); //useState([{ name: "", dueDate: "" }]);
  const [todoName, settodoName] = useState();
  const [todoDate, settodoDate] = useState();

  const todoNameKeyDown = (event) => {
    //console.log(event.target.value);
    let newtodoName = event.target.value;
    settodoName(newtodoName);
  };

  const todoDateKeyDown = (event) => {
    //console.log(event.target.value);
    let newtodoDate = event.target.value;
    settodoDate(newtodoDate);
  };

  const onAddtodoClicked = () => {
    console.log(`Todo Name is ${todoName} and Todo Date is ${todoDate}`);
    let items = [{ name: todoName, dueDate: todoDate }];
    let newtodolist = [...todolist, items];
    settodolist(newtodolist);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo
        onAddClicked={() => onAddtodoClicked()}
        ontodoNameKeyDown={(event) => todoNameKeyDown(event)}
        ontodoDateKeyDown={(event) => todoDateKeyDown(event)}
      ></AddTodo>
      <TodoItemContainer todoItems={todolist}></TodoItemContainer>
    </center>
  );
}

export default App;
