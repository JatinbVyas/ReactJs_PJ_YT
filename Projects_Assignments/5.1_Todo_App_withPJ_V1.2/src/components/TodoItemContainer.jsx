import TodoItems from "./TodoItems";
function TodoItemContainer({ todoItems, onDeleteClick }) {
  console.log(todoItems);
  return (
    <>
      <div className="items-container">
        {todoItems.map((items) => (
          <TodoItems
            key={items.name}
            todoItemName={items.name}
            todoItemDate={items.dueDate}
            onDeleteClick={onDeleteClick}
          ></TodoItems>
        ))}
      </div>
    </>
  );
}

export default TodoItemContainer;
