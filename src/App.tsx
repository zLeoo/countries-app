import React from 'react';
import useLocalStorage from './utils/useLocalStorage';

import Header from './components/Header';
import { GlobalStyle } from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import {ThemeProvider} from 'styled-components';



const App: React.FC = () => {

  const [theme, setTheme] = useLocalStorage('theme', dark);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }


  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

