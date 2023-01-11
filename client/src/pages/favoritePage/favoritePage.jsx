import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { TickerStock } from '../../components/tickerStock/tickerStock.jsx';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import { useTickers } from '../../hook/useTickers.jsx';
// import { requestFavoriteTickersChanges } from '../../app/slices/favoriteTickersSlice.js';

const socket = io('http://localhost:4000');

export const FavoritePage = () => {

  const listStocks = useSelector( state => state.tickers );
  const filteredArray = useSelector( state => state.favoriteTickers );
  console.log(filteredArray);
  // const listFavoriteStocks = useSelector( state => state.favoriteTickers );
  // const dispatch = useDispatch();

  // useEffect( () => {
  //   socket.on('connect', () => console.log('connected ', socket.id))
  //   socket.emit('start');
  //   socket.on('ticker', (ticker) => {
  //     dispatch(requestFavoriteTickersChanges(ticker));
  //   } );
  // }, []);

  // const arr = [
  //   // 'AAPL',
  //   // 'GOOGL',
  //   'MSFT',
  //   // 'AMZN',
  //   'FB',
  //   'TSLA',
  // ]

  //   listStocks.filter( iter => {
  //     for ( let i of arr ) {
  //       if ( iter.ticker === i ) {
  //         return iter.ticker === i
  //       }
  //     }
  //   })
  


  return (
    <Box component='div' sx={{m: '2rem auto', maxWidth: '85%'}}>
      <div style={{margin: '2rem'}}> { filteredArray.length < 1 ? 'Your list is empty' : 'Your favorite stocks list'} </div>
      {
        listStocks.filter( iter => {
          for ( let i of filteredArray ) {
            if ( iter.ticker === i ) {
              return iter.ticker === i
            }
          }
        })
        .map( stock => {
          return (
            <TickerStock informationStock={stock} key={stock.ticker} list='favorite'/>
          )
        })
      }
    </Box>
  );
};