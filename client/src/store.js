import { configureStore } from "@reduxjs/toolkit";
import { requestListSlice } from "./slices/requestListSlice";

export const store = configureStore({
  reducer: {
    requestList: requestListSlice.reducer,
    // student: studentSlice.reducer,
  },
});
