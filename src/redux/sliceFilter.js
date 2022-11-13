import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    myFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { myFilter } = filterSlice.actions;
