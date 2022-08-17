import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CRMHeader from './components/CRMHeader'

import Login from './components/Login';

const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#923da0',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#e0e0e0',
    },
    text: {
      secondary: '#8c15a1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CRMHeader />
      {/* <Login /> */}
    </ThemeProvider>
  )
}

export default App