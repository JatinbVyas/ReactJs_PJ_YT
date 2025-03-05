import { useContext } from "react";
import styles from "./WelocomMsg.module.css";
import TodoItemsContext from "../store/todo-items-store";

const WelcomeMsg = () => {
  const todoItems = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day!</p>
  );
};

export default WelcomeMsg;
