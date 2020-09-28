import React from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage'
import Calculators from './components/homepage/Calculators'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route} from 'react-router-dom';

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


const HomepageRouter = () => {
  return (
    <Homepage title="Calculateur d'interets" theme={theme}/>
  )
};

const CalculatorRouter = () => {
  return (
    <Calculators title="Tes calculateurs" theme={theme}/>
  )
};




function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" exact component={HomepageRouter} />
          <Route path="/calcs" exact component={CalculatorRouter} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
