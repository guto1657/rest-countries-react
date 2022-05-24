import React from 'react';
import { useAppContext } from '../../contexts/AppContext/index.js';
import { ThemeButton } from '../ThemeButton/index.jsx';
import { Nav, NavLogo, NavLink, NavItems } from './NavbarElements.js';

export const Navbar = () => {
  const [appState, actions] = useAppContext();

  return (
    <Nav dark={appState.darkMode ? 1 : 0}>
      <NavLogo to={'/home'} dark={appState.darkMode ? 1 : 0}>
        Where in the world?
      </NavLogo>
      <ThemeButton name="Dark Mode" />
    </Nav>
  );
};
