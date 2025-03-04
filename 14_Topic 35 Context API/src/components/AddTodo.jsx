import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const tododueDateElement = useRef();

  const handleOnAddClick = (event) => {
    event.preventDefault();

    /**
     * Here we used the concept of UseRef() hook of react.
     * This hook holds the current value of variable and whenever value changed it will not rerender the component.
     * E.g if declare one variable like let counter = useRef(0); given 0 as default value.
     * now in any event we can update value of it. E.g in change event of input we update value like counter.current += 1
     * it means it increase with 1 when input onchange event is called. but it will not rerender the component.
     *
     * Also we can use this hook as reference of tag. here in Input tag we used ref attribute and assign the useRef() hook variable to
     * it.
     * So now when value is change of input tag it will get store in this todoNameElement variable.
     * and we can access directly it with .current value.
     * Due to use of this we can remove onChange event of both input tag and also removed useState for both because with ref of uesRef we get current value of both inputs.
     * and with this we are able to remove value attribute of input tag also.
     */
    const todoName = todoNameElement.current.value;
    const dueDate = tododueDateElement.current.value;
    todoNameElement.current.value = "";
    tododueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
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
