import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database"; 

const initialState = {
  enrollments: initialEnrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: { payload: any }) => {
      state.enrollments.push(action.payload);
    },
    unenrollCourse: (state, action: { payload: any }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === action.payload.user && e.course === action.payload.course)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

