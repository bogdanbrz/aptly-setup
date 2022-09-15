import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCounter: true,
};

const uiSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
