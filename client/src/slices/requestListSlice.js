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
    renderRequestList: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export reducer function
export const { renderRequestList } = requestListSlice.actions;

export default requestListSlice.reducer;

// SUPPORTING FUNCTIONS
// export selector
export const selectRequestList = (state) => state.requestList.value;

// state.student.value.id
