import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterSlices } from "../store/counter";
import { privacySlices } from "../store/privacy";

const Controlls = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const onIncrement = () => {
    //Now in redux toolkit you no need to define action, just import action object and you directly access the method that is written in slice
    dispatch(counterSlices.increment());
  };

  const onDecrement = () => {
    dispatch(counterSlices.decrement());
  };

  const onAddition = () => {
    dispatch(counterSlices.addition({ number: inputValue.current.value }));
    inputValue.current.value = "";
  };

  const onSubstract = () => {
    dispatch(counterSlices.subtraction(inputValue.current.value));
    inputValue.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacySlices.togglePrivacy());
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
        <button
          type="button"
          className="btn btn-info"
          onClick={handlePrivacyToggle}
        >
          Privacy
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
