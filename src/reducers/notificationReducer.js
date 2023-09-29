import { createSlice } from "@reduxjs/toolkit";

const initialState = "initial notification message state";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setMessage(_, action) {
      return action.payload;
    },
  },
});

export const { setMessage } = notificationSlice.actions;
export default notificationSlice.reducer;
