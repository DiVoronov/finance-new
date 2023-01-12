import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { requestStockChanges } from '../slices/tickersSlice.js';

export const TickerContext = createContext(null);

export const TickerProvider = ({ children }) => {

  const listStocks = useSelector( state => state.tickers.currentState );
  const dispatch = useDispatch();

  useEffect( () => {

    const socket = io('http://localhost:4000');

    try {
      socket.on('connect', () => console.log('connected ', socket.id))
      socket.emit('start');
      socket.on('ticker', (ticker) => {
        dispatch(requestStockChanges(ticker));
      } );
    } catch (error) {
      console.log(error.message);
    }

    return socket.send('disconnect')
  }, []);

  return (
    <TickerContext.Provider value={listStocks}>
      { children }
    </TickerContext.Provider>
  )
};
