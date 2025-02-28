function TodoItems2() {
  let todoItemName = "Buy Milk";
  let todoItemDate = "4/12/2025";
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoItemName}</div>
        <div className="col-4">{todoItemDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems2;
