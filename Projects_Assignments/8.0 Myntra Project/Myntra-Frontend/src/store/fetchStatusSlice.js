import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: [
    {
      fetchDone: false, // false: 'PENDING' and true: 'DONE'
      currentlyFetching: false,
    },
  ],
  reducers: {
    markFetchDone: (state) => {
      state[0].fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state[0].currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state[0].currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
