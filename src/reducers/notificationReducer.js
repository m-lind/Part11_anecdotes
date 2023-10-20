import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(_, action) {
      return action.payload;
    },
    closeNotification() {
      return null;
    },
  },
});

export const { addNotification, closeNotification } = notificationSlice.actions;

export const setNotification = (text, time) => {
  return dispatch => {
    dispatch(addNotification(text));
    setTimeout(() => {
      dispatch(closeNotification());
    }, time * 1000);
  };
};

export default notificationSlice.reducer;
