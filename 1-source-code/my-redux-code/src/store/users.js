import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    //action => action handler
    userAdded: (users, action) => {
      users.push({
        id: ++id,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
