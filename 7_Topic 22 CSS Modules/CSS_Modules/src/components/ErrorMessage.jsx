import foodlistcss from "./ErrorMessage.module.css";

const ErrorMessage = ({ listofItems }) => {
  /**
   * Hre in props foodItems array is received. and this can be used.
   * This N number of variables can be passed to child component.
   * All get received in one argument just like in props.
   * now we can destructure it and can use it.
   * just like { listofItems } = props. it is not necessary to give name props, it can be any.
   * here we used one of the other way to get it.
   */
  return (
    <>
      {listofItems.length === 0 && (
        <h1
          className={`${foodlistcss["food-item-bg"]} ${foodlistcss["food-item-color"]}`}
        >
          I'm hungry.
        </h1>
      )}
    </>
  );
};

export default ErrorMessage;
