function App() {
  let foodItems = ["Dal", "Roti", "Green Vegetables", "Milk", "Salad"];
  return (
    /**
     * <React.Fragment></React.Fragment> tag is used to define that inside that tag we can define our HTML code and need to extra parrent tag element like <div> or <table> or <center>
     * Another way of React Fragment tag is used them as empty <> </>
     * using below way we can use array element with map method to show values.
     */
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
