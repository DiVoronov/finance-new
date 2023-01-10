import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  const linkList = [ 
    {value: 'All stocks', link: '/'}, 
    {value: 'Favorite', link: '/favorite'} 
  ]

  return (
    <Box component='div' sx={{m: '2rem auto'}}>
      {
        linkList.map( link => {
          return (
            <NavLink 
              to={link.link} 
              key={link.value}
            >
              {link.value}
            </NavLink>
          )
        })
      }
    </Box>
  );
};