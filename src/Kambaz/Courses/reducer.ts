import { createSlice } from "@reduxjs/toolkit";
import { courses as initialCourses } from "../Database"; 
const initialState = {
    courses: initialCourses
  };
    const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
      addCourse: (state, action) => {
        state.courses.push(action.payload);
      },
      updateCourse: (state, action) => {
        state.courses = state.courses.map(course =>
          course._id === action.payload._id ? action.payload : course
        );
      },
      deleteCourse: (state, action) => {
        state.courses = state.courses.filter(course => course._id !== action.payload);
      },
      setCourses: (state, action) => {
        state.courses = action.payload;
      },
    },
  });
  
  export const { addCourse, updateCourse, deleteCourse, setCourses } = courseSlice.actions;
  export default courseSlice.reducer;
  