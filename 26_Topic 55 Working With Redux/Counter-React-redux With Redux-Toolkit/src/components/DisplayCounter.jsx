import { useSelector } from "react-redux";

const DisplayCounter = () => {
  /**
   * useSelectore is a hook and available from react-redux pakage.
   * with this hook we can get the value from store and that can be used in our component.
   * in redux-toolkit case the name that we defined to reduecer map at the time of createStore needs to be givem.
   * in this case in reducer map in configure store i have given counterRD so I write store.counterRD. and then feth
   * counterVal from that.
   */
  const { counterVal } = useSelector((store) => store.counterRD);
  //const counter = counterObj.counterVal;
  const privacy = useSelector((store) => store.privacyT);
  return (
    <>
      {privacy && <p className="lead mb-4">Counter is currently private</p>}
      {!privacy && (
        <p className="lead mb-4">Counter current value {counterVal}</p>
      )}
    </>
  );
};

export default DisplayCounter;
