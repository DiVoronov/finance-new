import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setErrorTrue: (state, action) => {
      state = true;
      return state;
    },
    setErrorFalse: (state, action) => {
      state = false;
      return state;
    },
  },
});

export const { setErrorTrue, setErrorFalse } = errorSlice.actions;

export const errorReducer = errorSlice.reducer;

