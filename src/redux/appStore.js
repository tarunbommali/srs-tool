import { configureStore } from "@reduxjs/toolkit";
import progressReducer from './progressCountSlice'
import caseStudyReducer from './caseStudySlice';

export const appStore = configureStore({
    reducer: {
        progress: progressReducer,
        caseStudy: caseStudyReducer,

        
    }
});


