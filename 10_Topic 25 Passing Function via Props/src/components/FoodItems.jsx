import FoodList from "./FoodList";

function FoodItems(props) {
  /**
   * Here we seen the use of passing function as props to child.
   * Here we passed handleClickEvent to chile FoodList.
   * and now in FoodList we can handle it as per requirement.
   * e.g onClick or onChange.
   */
  let { listofItems } = props;
  function buyButtonClicked(itemName, event) {
    console.log(event);
    alert(`Buy ${itemName}, please`);
  }
  return (
    <ul className="list-group">
      {listofItems.map((item) => (
        <FoodList
          key={item}
          foodItem={item}
          handleClickEvent={() => console.log(`${item} is clicked.`)}
        ></FoodList>
      ))}
    </ul>
  );
}

export default FoodItems;
