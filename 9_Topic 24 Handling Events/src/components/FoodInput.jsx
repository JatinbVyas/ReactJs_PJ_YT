import styles from "./FoodInput.module.css";
const FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter your food item."
      className={styles.foodInput}
      onChange={(event) => console.log(event.target.value)}
    ></input>
  );
};

export default FoodInput;
