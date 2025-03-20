import { useSelector } from "react-redux";

const DisplayCounter = () => {
  /**
   * useSelectore is a hook and available from react-redux pakage.
   * with this hook we can get the value from store and that can be used in our component.
   */
  const counter = useSelector((store) => store.coutner);
  return <p className="lead mb-4">Counter current value {counter}</p>;
};

export default DisplayCounter;
