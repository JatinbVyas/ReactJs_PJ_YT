import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Displaytxt from "./components/Displaytxt";
function App() {
  const [calVal, setcalVal] = useState("");
  const onClick = (buttonText) => {
    console.log(buttonText);
  };
  return (
    <div id="calculator" className={styles.calci}>
      <Displaytxt setValue={calVal}></Displaytxt>
      <ButtonsContainer onButtonClicked={onClick}></ButtonsContainer>
    </div>
  );
}

export default App;
