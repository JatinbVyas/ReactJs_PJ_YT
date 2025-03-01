import styles from "./Displaytxt.module.css";
const Displaytxt = ({ setValue }) => {
  return (
    <input
      id="display"
      type="text"
      className={styles.disNumber}
      value={setValue}
      readOnly
    ></input>
  );
};

export default Displaytxt;
