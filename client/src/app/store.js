import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { tickersReducer } from './slices/tickersSlice';
import { favoriteTickersReducer } from './slices/favoriteTickersSlice';

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
    favoriteTickers: favoriteTickersReducer,
  },
});