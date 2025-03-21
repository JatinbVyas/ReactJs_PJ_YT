import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

// here we created store
const counterStore = configureStore({
  reducer: {
    counterRD: counterSlice.reducer,
    privacyT: privacySlice.reducer,
  },
});

export default counterStore;
