import TodoItems from "./TodoItems";
function TodoItemContainer({ todoItems, onDeleteClicked }) {
  //console.log(todoItems);
  return (
    <>
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItems
            key={items[0]["name"]}
            todoItemName={items[0]["name"]}
            todoItemDate={items[0]["dueDate"]}
            todoId={items[0]["id"]}
            handleOnDeleteClick={onDeleteClicked}
          ></TodoItems>
        ))}
      </div>
    </>
  );
}

export default TodoItemContainer;
