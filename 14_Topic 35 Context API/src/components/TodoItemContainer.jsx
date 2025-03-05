import { useContext } from "react";
import TodoItems from "./TodoItems";
import TodoItemsContext from "../store/todo-items-store";
function TodoItemContainer() {
  /**
   * Here we learning new concept Context API, this is one kind of data store from where any component can access the data
   * But but component only can access data if that component is under that particular context provider tag.
   * Here TodoItemContainer is under TodoItemContext.provider tag so this can access TodoItemsContext.
   * below is the syntax to define it, define one variable and assigne value to it as below.
   * useContext is one of the hook of react with the of this hook we can access TodoItemContext.
   * here todoItems variable have value store inside TodoItemsContext.
   */
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.itemData;

  console.log("Items from context", todoItems);
  return (
    <>
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItems
            key={items.name}
            todoItemName={items.name}
            todoItemDate={items.dueDate}
          ></TodoItems>
        ))}
      </div>
    </>
  );
}

export default TodoItemContainer;
