import FoodList from "./FoodList";

function FoodItems(props) {
  /**
   * Hre in props foodItems array is received. and this can be used.
   * This N number of variables can be passed to child component.
   * All get received in one argument just like in props.
   * now we can destructure it and can use it.
   * just like { listofItems } = props. it is not necessary to give name props, it can be any.
   * Now again it pass the value/variable to child component FoodList.
   * and same way as here in child component this variable can be used.
   */
  let { listofItems } = props;
  return (
    <ul className="list-group">
      {listofItems.map((item) => (
        <FoodList key={item} foodItem={item}></FoodList>
      ))}
    </ul>
  );
}

export default FoodItems;
