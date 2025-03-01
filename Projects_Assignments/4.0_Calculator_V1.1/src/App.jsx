import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Displaytxt from "./components/Displaytxt";
function App() {
  let [calVal, setcalVal] = useState("");
  return (
    <div id="calculator" className={styles.calci}>
      <Displaytxt setValue={calVal}></Displaytxt>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
