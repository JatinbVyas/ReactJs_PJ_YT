import React from "react";

function App() {
  return (
    /**
     * <React.Fragment></React.Fragment> tag is used to define that inside that tag we can define our HTML code and need to extra parrent tag element like <div> or <table> or <center>
     */
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
