import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handletodoNameOnChange = (event) => {
    console.log(event.target.value);
    settodoName(event.target.value);
  };
  const handledueDateOnChange = (event) => {
    console.log(event.target.value);
    setdueDate(event.target.value);
  };

  const handleOnAddClick = () => {
    onNewItem(todoName, dueDate);
    settodoName("");
    setdueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input
            className={styles.inputWidth}
            type="text"
            id="todoname"
            name="todoname"
            placeholder="Enter your todo"
            value={todoName}
            onChange={(event) => handletodoNameOnChange(event)}
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.inputWidth}
            type="date"
            id="tododate"
            name="tododate"
            value={dueDate}
            onChange={(event) => handledueDateOnChange(event)}
          ></input>
        </div>
        <div className="col-2 items-container">
          <button
            type="button"
            className="btn btn-success  todo-button"
            onClick={handleOnAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
