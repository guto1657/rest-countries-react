import React, { useEffect } from 'react';
import {
  ButtonWrapper,
  MoonIcon,
  ButtonName,
  FillMoonIcon,
} from './ThemeButtonElements';

import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';

export const ThemeButton = ({ name }) => {
  const [appState, actions] = useAppContext();
  const { darkMode } = appState;

  useEffect(() => {
    actions.checkSavedTheme();
  }, [actions]);

  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return (
    <ButtonWrapper
      onClick={() => actions.switchTheme()}
      dark={darkMode ? 1 : 0}
    >
      {darkMode ? <FillMoonIcon /> : <MoonIcon />}
      <ButtonName>{name}</ButtonName>
    </ButtonWrapper>
  );
};

ThemeButton.propTypes = {
  name: P.string.isRequired,
};
