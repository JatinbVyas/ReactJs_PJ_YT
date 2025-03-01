import styles from "./Container.module.css";
/**
 * Here we used the props children concept.
 * we simply enclosed taga and other components inside this Container component at app.jsx file.
 * Now here we received those as props object and we can render them as props.children.
 *  */
const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
