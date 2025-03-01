import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal Makhani", "Roti", "Green Vegetables", "Milk", "Salad"];
  /**
   * Learn the use of props children, here we created a component with name Container.jsx and in which we define <div> with some css to look good. and now in that Container component we passing other component and tags. Those taga and component can be catch at props.children at component side.
   */
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>Healthy Foods</h1>
        <ErrorMessage listofItems={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
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
