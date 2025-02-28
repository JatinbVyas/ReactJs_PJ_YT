function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            id="todoname"
            name="todoname"
            placeholder="Enter your todo"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" id="tododate" name="tododate"></input>
        </div>
        <div className="col-2 items-container">
          <button type="button" className="btn btn-success  todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
