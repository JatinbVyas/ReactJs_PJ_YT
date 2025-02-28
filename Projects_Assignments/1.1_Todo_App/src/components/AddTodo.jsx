function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row todo-row">
        <div class="col-6">
          <input
            type="text"
            id="todoname"
            name="todoname"
            placeholder="Enter your todo"
          ></input>
        </div>
        <div class="col-4">
          <input type="date" id="tododate" name="tododate"></input>
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
