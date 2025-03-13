import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  userId: string;
  courseId: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: { payload: Enrollment }) => {
      state.enrollments.push(action.payload);
    },
    unenrollCourse: (state, action: { payload: Enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (e) =>
          !(e.userId === action.payload.userId && e.courseId === action.payload.courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

