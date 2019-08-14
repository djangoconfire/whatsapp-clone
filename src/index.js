import React from 'react';
import ReactDOM from 'react-dom';

// MUI Imports
import  { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import App from './App';
import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2c6157' },
    secondary: { main: '#6fd056' },
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
