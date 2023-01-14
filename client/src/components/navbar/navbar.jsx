import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  const linkList = [ 
    {value: 'All stocks', link: '/', aria: 'allStocksPageLink'}, 
    {value: 'Favorite', link: '/favorite', aria: 'favoritePageLink'} 
  ];

  return (
    <Box 
      component='div' 
      sx={{
        m: '2rem auto', 
        display: 'flex', 
        justifyContent: 'center',
        fontFamily: 'Open Sans',
      }}
    >
      {
        linkList.map( link => {
          return (
            <NavLink 
              to={link.link} 
              key={link.value}
              aria-label={link.aria}
              style={{textDecoration: 'none'}}
            >
              <Box 
                sx={{
                  borderRadius: '15px',
                  border: '.5px solid lightgrey',
                  p: 2,
                  background: '#003049',
                  m: 1,
                  color: '#fff',
                  
                }}
              >
                {link.value}
              </Box>
            </NavLink>
          )
        })
      }
    </Box>
  );
};