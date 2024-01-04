import { configureStore } from "@reduxjs/toolkit";
import  requestListReducer  from "./slices/requestListSlice";

export const store = configureStore({
  reducer: {
    requestList: requestListReducer,
  },
});
