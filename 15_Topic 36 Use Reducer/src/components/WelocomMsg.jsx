import { useContext } from "react";
import styles from "./WelocomMsg.module.css";
import TodoItemsContext from "../store/todo-items-store";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.itemData;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day!</p>
  );
};

export default WelcomeMsg;
