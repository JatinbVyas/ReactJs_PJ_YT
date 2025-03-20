import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controlls = () => {
  //useDispatch hook is used to displatch that action, this returns one dispatch method.
  const dispatch = useDispatch();
  const inputValue = useRef();

  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const onAddition = () => {
    dispatch({ type: "ADD", payload: { number: inputValue.current.value } });
    inputValue.current.value = "";
  };

  const onSubstract = () => {
    dispatch({ type: "SUB", payload: { number: inputValue.current.value } });
    inputValue.current.value = "";
  };

  return (
    <>
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
      <br></br>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" ref={inputValue} placeholder="Enter number" />
        <button type="button" className="btn btn-warning" onClick={onAddition}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={onSubstract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controlls;
