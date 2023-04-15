import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductForm } from '../../types/interfaces/IProductForm';

const initialState: IProductForm[] = [];

export const formSubmissionSlice = createSlice({
  name: 'formSubmission',
  initialState: initialState,
  reducers: {
    addProductForm: (state, action: PayloadAction<IProductForm>) => {
      state.push(action.payload);
      // return (state = action.payload);
    },
  },
});

export const formSubmissionReducer = formSubmissionSlice.reducer;
export const formSubmissionAction = formSubmissionSlice.actions;
