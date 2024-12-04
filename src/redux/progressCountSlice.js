import { createSlice } from "@reduxjs/toolkit";

const progressCountSlice = createSlice({
  name: "progressCount",
  initialState: {
    steps: 0, // Tracks progress count
    completedSteps: Array(9).fill(false), // Tracks completion status for 9 pages
  },
  reducers: {
    toggleComplete: (state, action) => {
      const index = action.payload;
      const isCurrentlyComplete = state.completedSteps[index];
      state.completedSteps[index] = !isCurrentlyComplete;

      // Adjust the steps count based on completion status
      state.steps += isCurrentlyComplete ? -1 : 1;
    },
    reset: (state) => {
      state.steps = 0;
      state.completedSteps = Array(9).fill(false); // Reset all pages to incomplete
    },
  },
});

export const { toggleComplete, reset } = progressCountSlice.actions;
export default progressCountSlice.reducer;
