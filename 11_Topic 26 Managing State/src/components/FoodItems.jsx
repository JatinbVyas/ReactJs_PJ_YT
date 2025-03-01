import { useState } from "react";
import FoodList from "./FoodList";

function FoodItems(props) {
  let { listofItems } = props;
  let [activeItems, setactiveItems] = useState([]);

  function buyButtonClicked(itemName, event) {
    console.log("Clicked Item is ::", itemName);
    let clickedItems = [...activeItems, itemName];
    setactiveItems(clickedItems);
  }
  return (
    <ul className="list-group">
      {listofItems.map((item) => (
        <FoodList
          key={item}
          foodItem={item}
          isClicked={activeItems.includes(item)}
          handleClickEvent={(event) => buyButtonClicked(item, event)}
        ></FoodList>
      ))}
    </ul>
  );
}

export default FoodItems;
