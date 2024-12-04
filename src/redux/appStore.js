import { configureStore } from "@reduxjs/toolkit";
import progressReducer from './progressCountSlice'

export const appStore = configureStore({
    reducer: {
        progress: progressReducer,
    }
});


