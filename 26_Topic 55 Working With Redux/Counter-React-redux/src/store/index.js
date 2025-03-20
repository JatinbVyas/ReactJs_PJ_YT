import { createStore } from "redux";

const INITIAL_VALUE = { coutner: 0 };
/**
 *
 * This is a redux reducer that handles all actions and return the current store value.
 * this received store current value and action.
 */
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { coutner: store.coutner + 1 };
  } else if (action.type === "DECREMENT") {
    return { coutner: store.coutner - 1 };
  } else if (action.type === "ADD") {
    return { coutner: store.coutner + Number(action.payload.number) };
  } else if (action.type === "SUB") {
    return { coutner: store.coutner - Number(action.payload.number) };
  }
  return store;
};

// here we created store
const counterStore = createStore(counterReducer);

export default counterStore;
