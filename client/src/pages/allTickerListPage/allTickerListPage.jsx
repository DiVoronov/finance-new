import React from 'react';
import { Box } from '@mui/material';
import { AllTickerList } from '../../components/allTickerList/allTickerList';
import { ErrorPage } from '../errorPage/errorPage';
import { useDispatch, useSelector } from 'react-redux';

export const AllTickerListPage = () => {

  const isError = useSelector( state => state.error );

  return (
    <Box component='div'>
      {
        isError
        ?
        <ErrorPage/>
        :
        <AllTickerList/>
      }
    </Box>
  );
};