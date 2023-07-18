import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./slice/countSlice";

const rootReducer = combineReducers({
    countReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
