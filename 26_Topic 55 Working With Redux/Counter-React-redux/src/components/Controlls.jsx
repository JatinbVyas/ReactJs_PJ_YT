import { useDispatch } from "react-redux";

const Controlls = () => {
  //useDispatch hook is used to displatch that action, this returns one dispatch method.
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={onIncrement}
      >
        Increment by +1
      </button>
      <button type="button" className="btn btn-success" onClick={onDecrement}>
        Decrement by -1
      </button>
    </div>
  );
};

export default Controlls;
