import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { io } from 'socket.io-client';
import { requestStockChanges } from '../app/slices/tickersSlice';

export const useTickers = () => {

  const socket = io('http://localhost:4000');

  const dispatch = useDispatch();

  // useEffect( () => {
    socket.on('connect', () => console.log('connected ', socket.id))
    socket.emit('start');
    socket.on('ticker', (ticker) => {

      dispatch(requestStockChanges(ticker));
      console.log(ticker);
      // setListStocks(ticker); 
      // setCount( prev => prev + 1)
    } )
    // socket.on('ticker', (ticker) => console.log(ticker) )

  // }, [])
};
