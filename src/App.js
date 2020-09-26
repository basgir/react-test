import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage/Homepage'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main : '#f1d302',
      dark : '#d6bb00',
      light : '#ffe73c',
      contrastText :'#fff'
    },
    secondary:{
      main: '#f2542d',
      dark : '#ffffff',
      light : '#9ea7aa',
      contrastText :'#fff'
    },
    text:{
      primary : '#000000',
      secondary : '#f2542d'
    }
  },
  typography :{
    fontfamily: '"Roboto", "Open Sans", "Helvetica", "Arial", sans-serif',
  }

});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Homepage title="Calculateur d'interets" theme={theme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
