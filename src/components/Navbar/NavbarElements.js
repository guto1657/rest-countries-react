import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em calc((100vw - 1200px) / 2);
  max-width: 100%;
  height: 80px;
  background: ${({ dark }) =>
    dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 98%)'};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  transition: all 0.2s linear;
`;

export const NavLogo = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;
  font-weight: 800;
  font-size: 18.72px;
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
`;
