import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlices";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlices";

const myntrastore = configureStore({
  reducer: {
    item: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntrastore;
