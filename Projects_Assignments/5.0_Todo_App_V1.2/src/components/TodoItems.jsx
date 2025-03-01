function TodoItems(props) {
  let { todoItemName } = props;
  let { todoItemDate } = props;
  let { todoId } = props;
  let { handleOnDeleteClick } = props;
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoItemName}</div>
        <div className="col-4">{todoItemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => handleOnDeleteClick({ todoId })}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
