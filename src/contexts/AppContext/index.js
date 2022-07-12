import React, { createContext, useContext, useReducer, useRef } from 'react';
import { buildActions } from './buildActions';
import { reducer } from './reducer';
import P from 'prop-types';
import { initialState } from './initalState';

const Context = createContext();

export const AppContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[appState, actions.current]}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error(
      "you have to use 'UseAppContext' inside <AppContextProvider/>",
    );
  }

  return [...context];
};

AppContextProvider.propTypes = {
  children: P.node.isRequired,
};
