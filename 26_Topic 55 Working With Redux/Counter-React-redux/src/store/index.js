import { createStore } from "redux";

const INITIAL_VALUE = { coutner: 0 };

const counterReducer = (store = INITIAL_VALUE, action) => {
  return store;
};
const counterStore = createStore(counterReducer);

export default counterStore;
