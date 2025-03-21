import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import counterStore from "./store/index.js";

/**
 * Provider here is a component of react-redux pakage that joins react and redux
 * in store we need to give our store name that is created in store/index.js file
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
