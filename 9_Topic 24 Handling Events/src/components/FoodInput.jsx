import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const onChangeEventCalled = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter your food item."
      className={styles.foodInput}
      onChange={onChangeEventCalled}
    ></input>
  );
};

export default FoodInput;
