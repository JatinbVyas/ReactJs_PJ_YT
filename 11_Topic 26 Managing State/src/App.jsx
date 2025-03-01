import { useState } from "react";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  //let foodItems = ["Dal Makhani", "Roti", "Green Vegetables", "Milk", "Salad"];

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
  // let textStateArray = useState();
  // let textToShow = textStateArray[0];
  // let setTextState = textStateArray[1];
  // new syntaxt to write. we destructure the array here.
  let [textToShow, setTextState] = useState("Food item entered by user.");

  let [foodItems, setfoodItems] = useState([]);
  const onKeyDown = (event) => {
    //console.log(event);
    /**
     * So here we did dynamic food list items entry.
     * At line number 35 we deifned the useState for foodItems with no default values.
     * So when first App component is rendred there will be no value in list.
     * Now we passed function prop to chile component that is handleonkeyDownEvent. So this function props writtend
     * to handle onKeyDown function that called from FoodInput component and written here in App component.
     * Now when onKeyDown function is called we received new item when user hit Enter.
     * So here we written if condition to handle that part.
     * in  newFoodList variable using triple dot (spread operator) we assigned old/existing value and given one value of fooditem
     * also.
     * after that we called setfoodItems() and passed newFoodList so that will auto assigned to foodItems via React
     * as per concept of useState and that will passed as props to child and that will get added to list.
     */
    setTextState(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoodList = [...foodItems, newFoodItem];
      setfoodItems(newFoodList);
      console.log(newFoodItem);
    }
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
        <FoodInput handleonkeyDownEvent={onKeyDown}></FoodInput>
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
