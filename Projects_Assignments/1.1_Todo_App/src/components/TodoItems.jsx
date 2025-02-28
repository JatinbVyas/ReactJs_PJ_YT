function TodoItems(props) {
  let { todoItemName } = props;
  let { todoItemDate } = props;
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

export default TodoItems;
