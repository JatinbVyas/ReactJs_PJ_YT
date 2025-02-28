function TodoItems1() {
  let todoItemName = "Buy Milk";
  let todoItemDate = "4/12/2025";
  return (
    <div class="container">
      <div class="row todo-row">
        <div class="col-6">{todoItemName}</div>
        <div class="col-4">{todoItemDate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems1;
