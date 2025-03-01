import TodoItems from "./TodoItems";
function TodoItemContainer({ todoItems }) {
  //console.log(todoItems);
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
