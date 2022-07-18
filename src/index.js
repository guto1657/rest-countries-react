import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './contexts/AppContext';
import { GlobalStyles } from './styles/global-styles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <GlobalStyles />
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
