import { useState } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";

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

  const handleOnAddClick = (event) => {
    /**
     * Here we used the concept of form tag for any form.
     * So two input and one button we placed inside form tag here.
     * and in form we have action that genrally send data to server onclick of submit button.
     * but here we locally handlig this thing so we removed onClick event handlig from button
     * and placed it to form tag with onSubmit.
     * and when handleOnAddClick function is called on click event of button it behaves as earlier
     * we write event.preventDefault() means prevent form tags default behaviour and now when click eevent hapen
     * it will go back to App component from where it passed.
     */
    event.preventDefault();
    onNewItem(todoName, dueDate);
    settodoName("");
    setdueDate("");
  };

  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleOnAddClick}>
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
          <button type="submit" className="btn btn-success  todo-button">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
