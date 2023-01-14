import { createSlice } from '@reduxjs/toolkit';

const initialState = 
  [
    
  ];

export const favoriteTickersSlice = createSlice({
  name: 'favoriteTickers',
  initialState,
  reducers: {
    pushFavoriteTickersChanges: (state, action) => {
      if ( state.find( i => i === action.payload ) === action.payload ) {
        return state;
      } else {
        state.push(action.payload)
        return state;
      };
    },
    removeFavoriteTickersChanges: (state, action) => {
      const newState = state.filter( iter => iter !== action.payload );
      state = newState;
      return state;
    },
  },
});

export const { pushFavoriteTickersChanges, removeFavoriteTickersChanges } = favoriteTickersSlice.actions;

export const favoriteTickersReducer = favoriteTickersSlice.reducer;

