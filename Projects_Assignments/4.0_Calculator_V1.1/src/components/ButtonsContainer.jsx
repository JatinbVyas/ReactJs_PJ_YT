import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  let buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id="buttons-container" className={styles.calciButton}>
      {buttonsNames.map((button) => (
        <button key={button} className={styles.button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
