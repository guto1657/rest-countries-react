import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import './styles.css';
import P from 'prop-types';
import { Link } from 'react-router-dom';

export const ErrorMessage = ({
  message,
  information = '',
  hasButton = false,
}) => {
  const [appState, actions] = useAppContext();

  return (
    <div className={`errorWrapper ${appState.darkMode ? 'dark' : ''}`}>
      <h1 className="message">{message}</h1>
      <p className="information">{information}</p>
      {hasButton && (
        <Link className="btn" to="/home">
          go to homepage
        </Link>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: P.string.isRequired,
  information: P.string,
  hasButton: P.bool,
};
