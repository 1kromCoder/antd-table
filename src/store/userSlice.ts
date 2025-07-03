import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { DataType } from "../modules/Table";

interface UserState {
  selectedUsers: DataType[];
}

const initialState: UserState = {
  selectedUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DataType[]>) => {
      state.selectedUsers = action.payload;
    },
    removeUser: (state, action: PayloadAction<React.Key>) => {
      state.selectedUsers = state.selectedUsers.filter(
        (user) => user.key !== action.payload
      );
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
