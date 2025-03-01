import foodlistcss from "./FoodList.module.css";

/**
 * Here is the concept of adding event to element.
 * Here we added onClick event to button, event should be in camelCase.
 * you can see below this is how we given onClick event to button.
 * and return one simple arrow function and define one alert. so once button is clicked alter box will popup.
 */
const FoodList = (props) => {
  let { foodItem } = props;
  return (
    <li className={`${foodlistcss["food-item-bg"]} list-group-item`}>
      <span className={`${foodlistcss["food-item-color"]}`}>{foodItem}</span>
      <button
        className={`${foodlistcss.button} btn btn-success`}
        onClick={() => alert("Buy button clicked.")}
      >
        Buy
      </button>
    </li>
  );
};

export default FoodList;
