import { createSlice } from "@reduxjs/toolkit";
import { getStudentRequests } from "../Scheduling/TutorScheduling";
import { getCurrentRequests } from "../Scheduling/StudentScheduling";

// MAIN
const initialState = {
  value: [],
};

export const requestListSlice = createSlice({
  name: "requestList",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    renderRequestList: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export reducer function
export const { renderRequestList } =
  requestListSlice.actions;

export default requestListSlice.reducer;

// SUPPORTING FUNCTIONS
// export selector
export const selectRequestList = (state) => state.requestList.value;

// state.student.value.id