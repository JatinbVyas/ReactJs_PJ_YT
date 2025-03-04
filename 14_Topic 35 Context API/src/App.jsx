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
    //const newtodoItem = [...todolist, { name: itemName, dueDate: dueDate }];
    /**
     * Here we seen the use of another way to update current state of value with previous values.
     * directly use of ...todolist state variable to get previouse latest update value may be sometime
     * gives incorrect value when manytimes states are changing,
     * Due to this you can pass anonyoms function in settolist as below. currValue is anonyoms variable
     * it holds the latest previous values.
     * Two syntax for this.
     */
    // settodolist((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: dueDate },
    // ]);
    settodolist((currValue) => {
      const newtodoItem = [...currValue, { name: itemName, dueDate: dueDate }];
      return newtodoItem;
    });
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
