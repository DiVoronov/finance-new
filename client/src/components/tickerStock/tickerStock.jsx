import React, { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { StyledGrid, StyledTickerStock } from './tickerStock.style.js';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { pushFavoriteTickersChanges, removeFavoriteTickersChanges } from '../../app/slices/favoriteTickersSlice.js';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const TickerStock = ({ informationStock, list }) => {

  const previousListStocks = useSelector( state => state.tickers.previousState );

  const previousInformationStock = previousListStocks.filter( iter => iter.ticker === informationStock.ticker )[0];

  function increaseOrDecrease( value ) {
    if (previousInformationStock[value] <= informationStock[value]) {
      return {
        background: '#c3fcbc',
        color: '#2d740d',
        grow: true,
      };
    } else {
      return {
        background: '#fee2e2',
        color: '#c11d0d',
        grow: false,
      };
    }
  };

  const backgroundTickers = {
    AAPL: '#003049',
    GOOGL: '#d62828',
    MSFT: '#f77f00',
    AMZN: '#8338ec',
    FB: '#3a86ff',
    TSLA: '#e63946',
  };

  const [ classAddTicker, setClassAddTicker ] = useState('');
  const [ classRemoveTicker, setClassRemoveTicker ] = useState('');

  const dispatch = useDispatch();
  const addTicker = () => {
    dispatch(pushFavoriteTickersChanges(informationStock['ticker']));
    setClassAddTicker('classAddTicker');
    setTimeout( () => {
      setClassAddTicker('');
    }, 500)
  };
  const removeTicker = () => {
    setClassRemoveTicker('classRemoveTicker');
    setTimeout( () => {
      setClassRemoveTicker('');
      dispatch(removeFavoriteTickersChanges(informationStock['ticker']));
    }, 500)
  };

  return (
    <StyledGrid>
      <Grid container spacing={0} className={`${classAddTicker} ${classRemoveTicker}`}>
        <Grid xs={2}>
          <StyledTickerStock 
            theme={{
              background: backgroundTickers[informationStock['ticker']], 
              color: '#fff',
              
            }}>
            <Box className='tickerName'>{informationStock['ticker']}</Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={3}>
          <StyledTickerStock theme={{...increaseOrDecrease('price')}} >
            <Box className={`price`}>
              ${informationStock['price']}
            </Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock></StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock theme={{...increaseOrDecrease('yield')}}>
            <Box className={`yield`}>
              {informationStock['yield']}
              { 
                increaseOrDecrease('yield').grow
                ?
                <ArrowDropUpIcon/>
                :
                <ArrowDropDownIcon/>
              }
            </Box>
          </StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock theme={{...increaseOrDecrease('change_percent')}}>
            <Box className={`change_percent`}>
              {informationStock['change_percent']}
              { 
                increaseOrDecrease('change_percent').grow
                ?
                <ArrowDropUpIcon/>
                :
                <ArrowDropDownIcon/>
              }
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
      
    </StyledGrid>
  );
};