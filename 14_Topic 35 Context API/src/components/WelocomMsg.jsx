import styles from "./WelocomMsg.module.css";
const WelcomeMsg = ({ todoItems }) => {
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day!</p>
  );
};

export default WelcomeMsg;
