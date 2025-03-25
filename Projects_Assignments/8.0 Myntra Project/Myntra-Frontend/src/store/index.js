import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlices";
import fetchStatusSlice from "./fetchStatusSlice";

const myntrastore = configureStore({
  reducer: { item: itemSlice.reducer, fetchStatus: fetchStatusSlice.reducer },
});

export default myntrastore;
