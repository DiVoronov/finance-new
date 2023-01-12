import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { TickerStock } from '../tickerStock/tickerStock.jsx';
import { HighInTable } from '../shared/highInTable/highITable.jsx';
import { TickerContext } from '../../app/context/tickerContext.jsx';

export const AllTickerList = () => {

  const listStocks = useContext(TickerContext);

  return (
    <Box component='div' sx={{m: '2rem auto', maxWidth: '85%'}}>
      <HighInTable/>
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