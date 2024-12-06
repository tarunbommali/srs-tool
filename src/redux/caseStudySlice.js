import { createSlice } from "@reduxjs/toolkit";

const caseStudySlice = createSlice({
  name: "caseStudy",
  initialState: {
    selectedCaseStudy: "",
  },
  reducers: {
    setCaseStudy: (state, action) => {
      state.selectedCaseStudy = action.payload;
    },
  },
});

export const { setCaseStudy } = caseStudySlice.actions;
export default caseStudySlice.reducer;
