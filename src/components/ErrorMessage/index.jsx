import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import './styles.css';
import P from 'prop-types';

export const ErrorMessage = ({ message, information = '' }) => {
  const [appState, actions] = useAppContext();

  return (
    <div className={`errorWrapper ${appState.darkMode ? 'dark' : ''}`}>
      <h1 className="message">{message}</h1>
      <p className="information">{information}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: P.string.isRequired,
  information: P.string,
};