import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Displaytxt from "./components/Displaytxt";
function App() {
  const [calVal, setcalVal] = useState("");
  const onClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      //Here eval is JS function which auto evalute string value in mathematics concepts.
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };
  return (
    <div id="calculator" className={styles.calci}>
      <Displaytxt setValue={calVal}></Displaytxt>
      <ButtonsContainer onButtonClicked={onClick}></ButtonsContainer>
    </div>
  );
}

export default App;
