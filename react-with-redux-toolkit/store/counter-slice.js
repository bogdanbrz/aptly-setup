import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        reset(state, action) {
            state.counter = action.payload;
        },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
