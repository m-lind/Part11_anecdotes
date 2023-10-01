import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(_, action) {
      return action.payload;
    },
    closeNotification() {
      return null;
    },
  },
});

export const { setNotification, closeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
