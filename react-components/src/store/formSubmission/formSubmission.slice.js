import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const formSubmissionSlice = createSlice({
    name: 'formSubmission',
    initialState: initialState,
    reducers: {
        addProductForm: (state, action) => {
            state.push(action.payload);
        },
    },
});
export const formSubmissionReducer = formSubmissionSlice.reducer;
export const formSubmissionAction = formSubmissionSlice.actions;
