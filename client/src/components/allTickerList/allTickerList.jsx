import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { TickerStock } from '../tickerStock/tickerStock.jsx';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import { useTickers } from '../../hook/useTickers.jsx';
import { requestStockChanges } from '../../app/slices/tickersSlice.js';

const socket = io('http://localhost:4000');
// console.log(process.env);
console.log(socket);

export const AllTickerList = () => {

  const [ count, setCount ] = useState(0);

  // const [ listStocks, setListStocks ] = useState([
  //   {"ticker":"GOOGL","exchange":"NASDAQ","price":237.08,"change":154.38,"change_percent":0.10,"dividend":0.46,"yield":1.18,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  //   {"ticker":"MSFT","exchange":"NASDAQ","price":261.46,"change":161.45,"change_percent":0.41,"dividend":0.18,"yield":0.98,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  //   {"ticker":"AMZN","exchange":"NASDAQ","price":260.34,"change":128.71,"change_percent":0.60,"dividend":0.07,"yield":0.42,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  //   {"ticker":"FB","exchange":"NASDAQ","price":266.77,"change":171.92,"change_percent":0.75,"dividend":0.52,"yield":1.31,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  //   {"ticker":"TSLA","exchange":"NASDAQ","price":272.13,"change":158.76,"change_percent":0.10,"dividend":0.96,"yield":1.00,"last_trade_time":"2021-04-30T11:53:21.000Z"}
  // ]);

  const listStocks = useSelector( state => state.tickers );
  // console.log(state);
  const dispatch = useDispatch();

  useEffect( () => {
    socket.on('connect', () => console.log('connected ', socket.id))
    socket.emit('start');
    socket.on('ticker', (ticker) => {
      // setListStocks(ticker); 
      dispatch(requestStockChanges(ticker));
      setCount( prev => prev + 1);
    } )
    // socket.on('ticker', (ticker) => console.log(ticker) )
  }, []);
  
  // const tickersUse = useTickers();
  // useEffect( () => {
  //   console.log(tickersUse());
  // }, [])

  return (
    <Box component='div' sx={{m: '2rem auto', maxWidth: '85%'}}>
      <div>{count}</div>
      {
        listStocks.map( stock => {
          return (
            <TickerStock informationStock={stock} key={stock.ticker} list='main'/>
          )
        })
      }
    </Box>
  );
};