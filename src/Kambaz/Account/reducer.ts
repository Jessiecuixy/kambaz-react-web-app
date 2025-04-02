import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  profileLoaded: false,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.profileLoaded = true;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;