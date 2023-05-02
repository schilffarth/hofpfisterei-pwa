import { createSlice } from '@reduxjs/toolkit';

const backActionSlice = createSlice({
    name: 'backAction',
    initialState: {
        actions: [],
    },
    reducers: {
        pushBackAction: (state, action) => {
            state.actions.push(action.payload);
        },
        popBackAction: (state) => {
            state.actions.pop();
        },
        clearBackActions: (state) => {
            state.actions = [];
        },
    },
});

export const { pushBackAction, popBackAction, clearBackActions } = backActionSlice.actions;

export default backActionSlice.reducer;
