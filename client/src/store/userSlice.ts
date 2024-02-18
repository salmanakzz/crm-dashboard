import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../utils/constants";

const userSlice = createSlice({
  name: "user",
  initialState: {} as UserType,
  reducers: {
    initUser: (state, action) => {
      return (state = action.payload);
    },
    updateProfilePicture: (state, action) => {
      state.imgUrl = action.payload;
    },
  },
});

export const { initUser, updateProfilePicture } = userSlice.actions;

export default userSlice.reducer;
