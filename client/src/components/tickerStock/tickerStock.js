import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { StyledTickerStock } from './tickerStock.style.js';

export const TickerStock = ({ informationStock }) => {

  //{"ticker":"GOOGL",
  //"exchange":"NASDAQ",
  //"price":237.08,
  //"change":154.38,"
  //change_percent":0.10,
  //"dividend":0.46,
  //"yield":1.18,"
  //last_trade_time":"2021-04-30T11:53:21.000Z"},

  return (
    <Box component='div' sx={{m: '2rem auto', maxWidth: '85%', flexGrow: 1}}>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <StyledTickerStock>{informationStock['ticker']}</StyledTickerStock>
        </Grid>
        <Grid xs={3}>
          <StyledTickerStock>${informationStock['price']}</StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock>xs=2</StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock>{informationStock['yield']}</StyledTickerStock>
        </Grid>
        <Grid xs={2}>
          <StyledTickerStock>{informationStock['change_percent']}</StyledTickerStock>
        </Grid>
        <Grid xs={1}>
          <StyledTickerStock><button>add</button></StyledTickerStock>
        </Grid>
      </Grid>
      
    </Box>
  );
};