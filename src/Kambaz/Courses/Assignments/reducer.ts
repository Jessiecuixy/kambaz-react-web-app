import { createSlice } from "@reduxjs/toolkit";
// import * as db from "../../Database"; 
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        ...assignment,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
}});

export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
