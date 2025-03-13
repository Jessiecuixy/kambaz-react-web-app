import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database"; 

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      // console.log("addAssignment payload:", action.payload);
      state.assignments.push(action.payload);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map(a =>
        a._id === action.payload._id ? action.payload : a
      );
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(a => a._id !== action.payload);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
