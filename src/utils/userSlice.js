import { createSlice } from "@reduxjs/toolkit";

// Using this to store signedIn/signedUp user's information
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      // This will set state to user
      return action.payload;
    },
    removeUser: (state, action) => {
      // This will set state to null
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
