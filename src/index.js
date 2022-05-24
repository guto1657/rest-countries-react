import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import App from './App';
import { AppContextProvider } from './contexts/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
