import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';

export const SelectWrapper = styled.div`
  width: 15%;

  @media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 7%;
  }
`;
export const SelectHeader = styled.div`
  padding: 16px 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;

  transition: all 0.2s linear;

  background: ${({ dark }) =>
    dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 98%)'};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;
export const SelectName = styled.span``;
export const ArrowIcon = styled(RiArrowDownSLine)`
  font-size: 1.2em;
`;

export const SelectListWrapper = styled.div`
  position: relative;

  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

export const DropdownList = styled.ul`
  padding: 10px 0;
  margin: 0;
  position: absolute;
  top: 5px;
  width: 100%;
  padding-left: 1.3em;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);

  background: ${({ dark }) =>
    dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 98%)'};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  z-index: 9999;
`;

export const ListItem = styled.div`
  margin-bottom: 3%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
