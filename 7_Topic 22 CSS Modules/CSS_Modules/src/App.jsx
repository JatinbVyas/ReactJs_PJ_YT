import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = [];

  /**
   * Here foodItems define only ones in App.jsx then it pass to both child component ErrorMessage and FoodItems.
   * For passing varriable syntaxt is as below define any variable name
   * just like here is listofItems and assign the value in {} braces.
   * e.g temp={foodItems}
   * Now this foodItems array will get received in both components.
   */
  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage listofItems={foodItems}></ErrorMessage>
      <FoodItems listofItems={foodItems}></FoodItems>
    </>
  );
}

export default App;
