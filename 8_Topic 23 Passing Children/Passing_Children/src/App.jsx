import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal Makhani", "Roti", "Green Vegetables", "Milk", "Salad"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage listofItems={foodItems}></ErrorMessage>
      <FoodItems listofItems={foodItems}></FoodItems>
    </>
  );
}

export default App;
