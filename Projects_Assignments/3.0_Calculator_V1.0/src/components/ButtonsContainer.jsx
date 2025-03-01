import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  return (
    <div id="buttons-container" className={styles.calciButton}>
      <button className={styles.button}>C</button>
    </div>
  );
};

export default ButtonsContainer;
