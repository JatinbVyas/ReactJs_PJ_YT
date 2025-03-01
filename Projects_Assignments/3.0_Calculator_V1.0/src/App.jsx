import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Displaytxt from "./components/Displaytxt";
function App() {
  return (
    <div id="calculator" className={styles.calci}>
      <Displaytxt></Displaytxt>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
