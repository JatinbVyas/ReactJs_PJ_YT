function App() {
  return (
    /**
     * <React.Fragment></React.Fragment> tag is used to define that inside that tag we can define our HTML code and need to extra parrent tag element like <div> or <table> or <center>
     * Another way of React Fragment tag is used them as empty <> </>
     */
    <>
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Salad</li>
      </ul>
    </>
  );
}

export default App;
