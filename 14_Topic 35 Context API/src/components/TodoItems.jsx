import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import TodoItemsContext from "../store/todo-items-store";

function TodoItems(props) {
  let { todoItemName } = props;
  let { todoItemDate } = props;
  /**
   * Here we learn new concept in context API that we can fetch function from context provider instead of receiveing as props from
   * parent.
   * Here we fetch delItem function from context provider that is already passed in value in App component.
   */
  const { delItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoItemName}</div>
        <div className="col-4">{todoItemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => delItem(todoItemName)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
