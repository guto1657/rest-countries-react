import styled from 'styled-components';
import { BsMoon, BsMoonFill } from 'react-icons/bs';

export const ButtonName = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em 0 0;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ dark }) => (dark ? '#fff' : '#00000')};
`;

export const MoonIcon = styled(BsMoon)`
  margin-right: 7px;
`;

export const FillMoonIcon = styled(BsMoonFill)`
  margin-right: 7px;
`;
