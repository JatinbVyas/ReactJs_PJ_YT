import styles from "./FoodInput.module.css";
/**
 * Here now we seen that in props this child received function call object.
 * means from parent App.jsx received handleonChangeEvent and this needs to be handle anywhere as per requirement.
 * Here we handle it onChange.
 * So when user type anything on input text this event will get called.
 * here we received it in props object but we directly destructured it.
 */
const FoodInput = ({ handleonkeyDownEvent }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your food item."
        className={styles.foodInput}
        onKeyDown={handleonkeyDownEvent}
      ></input>
      <button className={`${styles.foodAddButtons} btn btn-success`}>
        Add
      </button>
    </>
  );
};

export default FoodInput;
