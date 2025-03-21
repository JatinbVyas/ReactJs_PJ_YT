import { createStore } from "redux";

const INITIAL_VALUE = { coutner: 0, privacy: false };
/**
 *
 * This is a redux reducer that handles all actions and return the current store value.
 * this received store current value and action.
 *
 * Here we used spread operatior while return value because now we have more than one value in object
 * and due to this when we return any value based on type , other store value we also need to return otherwise
 * that value got undefined and due to this first we used spread opertor that will keep object with existing value and after that we are chaning value based on action type and returning it.
 */
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, coutner: store.coutner + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, coutner: store.coutner - 1 };
  } else if (action.type === "ADD") {
    return { ...store, coutner: store.coutner + Number(action.payload.number) };
  } else if (action.type === "SUB") {
    return { ...store, coutner: store.coutner - Number(action.payload.number) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

// here we created store
const counterStore = createStore(counterReducer);

export default counterStore;
