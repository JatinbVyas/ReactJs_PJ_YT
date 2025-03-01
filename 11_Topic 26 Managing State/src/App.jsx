import { useState } from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal Makhani", "Roti", "Green Vegetables", "Milk", "Salad"];

  //let  = "Food entered by user.";

  /**
   * Here we learned the new concept useState(). uesState is one of the react hook.
   * So useState() is used to maintain the latest change value or we can say the current value.
   * Here textStateArray recevied two elements from useState() method.
   * First one is current or we can say latest value and another is state method.
   * So when first time App component is load or render useStae have no values and due to this
   * in text show it will save undefined value.
   * After that once user something type in input box of FoodInput component it will call onChange event.
   * When this event is called new value or we can say new input received from user.
   * At that time stateTextStae method of useState is called that is we written in onChange event
   * and it will received the new input value.
   * And that automatically assigned to textToShow variable.
   * Here in useState("Default value") we can pass initiall default value also.
   */
  let textStateArray = useState();
  let textToShow = textStateArray[0];
  let setTextState = textStateArray[1];

  console.log(`Current value of textSate is :: ${textToShow}`);
  /**
   * Here we seen the use of passing function as props to child.
   * Here we passed handleonChangeEvent to chile FoodInput.
   * and now in FoodInput we can handle it as per requirement.
   * e.g onClick or onChange.
   */
  const onChangeEventCalled = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
    /**
     * Above we assigned dynamic value to variable textToShow.
     * That will change in variable but not in DOM because, rendring will done only ones.
     */
  };

  /**
   * Learn the use of props children, here we created a component with name Container.jsx and in which we define <div> with some css to look good. and now in that Container component we passing other component and tags. Those taga and component can be catch at props.children at component side.
   */
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>Healthy Foods</h1>
        <ErrorMessage listofItems={foodItems}></ErrorMessage>
        <FoodInput handleonChangeEvent={onChangeEventCalled}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems listofItems={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above are the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
