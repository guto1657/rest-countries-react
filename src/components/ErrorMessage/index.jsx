import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ErrorWrapper,
  Information,
  Message,
  Button,
} from './ErrorMessageElements';

export const ErrorMessage = ({
  message,
  information = '',
  hasButton = false,
}) => {
  const [appState, actions] = useAppContext();

  return (
    <ErrorWrapper className={appState.darkMode ? 'dark' : ''}>
      <Message>{message}</Message>
      <Information>{information}</Information>
      {hasButton && <Button to="/home">go to homepage</Button>}
    </ErrorWrapper>
  );
};

ErrorMessage.propTypes = {
  message: P.string.isRequired,
  information: P.string,
  hasButton: P.bool,
};
