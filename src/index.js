import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons/lib';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme } from './theme/Theme';

/**
 * Icontextprovider GLOBAL inlinestyling, 
 * reason? the icons ain't centered.
 */

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
