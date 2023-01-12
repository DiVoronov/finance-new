import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const HighInTable = () => {

  const style = {
    background: 'none',
    height: '3rem',
    borderBottom: '1px solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    padding: '.5rem 1rem',
    justifyContent: 'center',
  };

  const StyledDiv = ({ children }) => (
    <div style={style}>
      { children }
    </div>
  );

  return (
    <Box component='div' sx={{maxWidth: '90%', flexGrow: 1, m: 'auto'}}>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <StyledDiv>
            Name
          </StyledDiv>
        </Grid>
        <Grid xs={3}>
          <StyledDiv>
            Price
          </StyledDiv>
        </Grid>
        <Grid xs={2}>
          <StyledDiv>
          </StyledDiv>
        </Grid>
        <Grid xs={2}>
          <StyledDiv>
            Yield
          </StyledDiv>
        </Grid>
        <Grid xs={2}>
          <StyledDiv>
            Change percent
          </StyledDiv>
        </Grid>
        <Grid xs={1}>
          <StyledDiv>
          </StyledDiv>
        </Grid>
      </Grid>
      
    </Box>
  );
};