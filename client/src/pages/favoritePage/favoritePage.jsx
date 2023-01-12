import React from 'react';
import { Box } from '@mui/material';
import { TickerStock } from '../../components/tickerStock/tickerStock.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { HighInTable } from '../../components/shared/highInTable/highITable.jsx';

export const FavoritePage = () => {

  const listStocks = useSelector( state => state.tickers.currentState );
  const filteredArray = useSelector( state => state.favoriteTickers );

  return (
    <Box component='div' sx={{m: '2rem auto', maxWidth: '85%'}}>
      <div style={{margin: '2rem'}}> { filteredArray.length < 1 ? 'Your list is empty' : 'Your favorite stocks list'} </div>
      <HighInTable/>
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