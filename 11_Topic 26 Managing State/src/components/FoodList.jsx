import foodlistcss from "./FoodList.module.css";

/**
 * Here now we seen that in props this child received function call object.
 * means from parent FoodItems received handleClickEvent and this needs to be handle anywhere as per requirement.
 * Here we handle it onClick.
 * So when user click on button it called function and that is defined in parent.
 */
const FoodList = (props) => {
  let { foodItem } = props;

  return (
    <li className={`${foodlistcss["food-item-bg"]} list-group-item`}>
      <span className={`${foodlistcss["food-item-color"]}`}>{foodItem}</span>
      <button
        className={`${foodlistcss.button} btn btn-success`}
        onClick={props.handleClickEvent}
      >
        Buy
      </button>
    </li>
  );
};

export default FoodList;
