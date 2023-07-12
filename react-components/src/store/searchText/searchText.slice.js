import { createSlice } from '@reduxjs/toolkit';
const initialState = '';
export const searchTextSlice = createSlice({
    name: 'searchText',
    initialState: initialState,
    reducers: {
        addSerchText: (state, action) => {
            return (state = action.payload);
        },
    },
});
export const serchTextReducer = searchTextSlice.reducer;
export const serchTextAction = searchTextSlice.actions;
