import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";
import TodoItemsContext from "../store/todo-items-store";

function AddTodo() {
  /**
   * Here we learn new concept in context API that we can fetch function from context provider instead of receiveing as props from
   * parent.
   * Here we fetch addItem function from context provider that is already passed in value in App component.
   */
  const { addItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const tododueDateElement = useRef();

  const handleOnAddClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = tododueDateElement.current.value;
    todoNameElement.current.value = "";
    tododueDateElement.current.value = "";
    addItem(todoName, dueDate);
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
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input
            className={styles.inputWidth}
            type="date"
            id="tododate"
            name="tododate"
            ref={tododueDateElement}
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
