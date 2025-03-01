import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal Makhani", "Roti", "Green Vegetables", "Milk", "Salad"];

  let textToShow = "Food entered by user.";
  /**
   * Here we seen the use of passing function as props to child.
   * Here we passed handleonChangeEvent to chile FoodInput.
   * and now in FoodInput we can handle it as per requirement.
   * e.g onClick or onChange.
   */
  const onChangeEventCalled = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
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
