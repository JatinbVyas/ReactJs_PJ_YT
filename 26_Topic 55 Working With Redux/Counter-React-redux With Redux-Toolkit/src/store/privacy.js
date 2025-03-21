import { createSlice } from "@reduxjs/toolkit";

//create another slice for toggel
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    togglePrivacy: (state) => {
      return (state = !state);
    },
  },
});

export const privacySlices = privacySlice.actions;

export default privacySlice;
