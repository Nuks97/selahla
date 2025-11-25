import React from 'react';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#004386', // deep blue
    },
    secondary: {
      main: '#f50057', // accent color (adjust as needed)
    },
    background: {
      default: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
  },
});

export default theme;
