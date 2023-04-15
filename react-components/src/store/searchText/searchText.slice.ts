import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState: initialState,
  reducers: {
    addSerchText: (state: string, action: PayloadAction<string>) => {
      console.log('action.payload: ', action.payload);
      return (state = action.payload);
    },
  },
});

export const serchTextReducer = searchTextSlice.reducer;
export const serchTextAction = searchTextSlice.actions;
