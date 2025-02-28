/**
 * This is he concept of css modules.
 * You can defile each component wise seprate css using below method
 * 1. First you need to define CSS file with same component name, e.g FoodList.module.css
 * 2. Then need to import the CSS file using below syntax. e.g. import foodlistcss from "./FoodList.module.css";
 * 3. Third now you can access class name from import object e.g. foodlistcss['food-item-bg']
 * Using this way each component have their seprte css file and if someone gave same class name then conflict will not occure.
 */
import foodlistcss from "./FoodList.module.css";

const FoodList = (props) => {
  let { foodItem } = props;
  return (
    <li className={`${foodlistcss["food-item-bg"]} list-group-item`}>
      <span className={`${foodlistcss["food-item-color"]}`}>{foodItem}</span>
    </li>
  );
};

export default FoodList;
