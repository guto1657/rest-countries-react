import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchFieldWrapper = styled.div`
  width: 40%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SearchPlaceholder = styled.input`
  width: 100%;
  padding: 16px 16px 16px 60px;
  border-radius: 8px;
  border: none;
  text-align: left;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  outline: none;
  font-weight: 600;

  transition: all 0.2s linear;

  background: ${({ dark }) => (dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 98%)')};
  color: ${({ dark }) => (dark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 52%)')};

  &::placeholder {
    color: ${({ dark }) => (dark ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 52%)')};
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 16px;
  left: 25px;
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(0, 0%, 52%)')};
`;
