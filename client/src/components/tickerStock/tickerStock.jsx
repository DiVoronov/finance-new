import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { StyledTickerStock } from './tickerStock.style.js';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { pushFavoriteTickersChanges, removeFavoriteTickersChanges } from '../../app/slices/favoriteTickersSlice.js';


// const Ticker = ( className, children ) => {

//   return (
//     <StyledTickerStock>
//       <Box 
//         component='div'
//         className={className}
//       >
//         { ...children }
//       </Box>
//     </StyledTickerStock>
//   )
// };

export const TickerStock = ({ informationStock, list }) => {

  //{"ticker":"GOOGL",
  //"exchange":"NASDAQ",
  //"price":237.08,
  //"change":154.38,"
  //change_percent":0.10,
  //"dividend":0.46,
  //"yield":1.18,"
  //last_trade_time":"2021-04-30T11:53:21.000Z"},

  const backgroudTickers = {
    AAPL: '#003049',
    GOOGL: '#d62828',
    MSFT: '#f77f00',
    AMZN: '#8338ec',
    FB: '#3a86ff',
    TSLA: '#e63946',
  };

  const dispatch = useDispatch();
  const addTicker = () => {
    dispatch(pushFavoriteTickersChanges(informationStock['ticker']));
  };
  const removeTicker = () => {
    dispatch(removeFavoriteTickersChanges(informationStock['ticker']));
  };

  return (
    <Box component='div' sx={{maxWidth: '90%', flexGrow: 1, m: 'auto'}}>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <StyledTickerStock theme={{background: backgroudTickers[informationStock['ticker']], color: '#fff'}}>
            <Box className='tickerName'>{informationStock['ticker']}</Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={3}>
          <StyledTickerStock theme={{color: 'black'}}>
            <Box className='price'>
              ${informationStock['price']}
            </Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock></StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock>
            <Box className='yield'>
              {informationStock['yield']}
            </Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock>
            <Box className='change_percent'>
              {informationStock['change_percent']}
            </Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={1}>
          <StyledTickerStock >

            {
              list === 'main'
              ?
              <AddCircleOutlineIcon 
                className='addToFavorite'
                color='disabled'
                onClick={addTicker}
              />
              :
              <RemoveCircleOutlineIcon 
                className='addToFavorite'
                color='disabled'
                onClick={removeTicker}
              />
            }
            
          </StyledTickerStock>
        </Grid>
      </Grid>
      
    </Box>
  );
};