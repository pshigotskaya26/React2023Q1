import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialState = '';

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    addSerchText: (state, action: PayloadAction<string>) => {
      action.payload;
    },
  },
});

export const serchTextReducer = searchTextSlice.reducer;
export const serchTextAction = searchTextSlice.actions;
