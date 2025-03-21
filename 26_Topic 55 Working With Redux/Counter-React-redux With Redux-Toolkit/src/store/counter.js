import { createSlice } from "@reduxjs/toolkit";

/**
 * This is slice that we can create. instead of reducer in reduce toolkit we need to define
 * slice using createSlice and we can use it.
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += Number(action.payload.number);
    },
    subtraction: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

export const counterSlices = counterSlice.actions;

export default counterSlice;
