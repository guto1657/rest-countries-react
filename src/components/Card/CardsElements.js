import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  border-radius: 10px 0;
  transition: 0.3s all ease-in-out;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s all ease-in-out;
  }
`;
export const Picture = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media (max-width: 768px) {
    height: 225px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 30px 30px 50px 30px;
  background: ${({ dark }) => (dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0 0 10px 10px;
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(200, 15%, 8%)')};
  align-self: normal;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    padding: 30px 30px 50px 30px;
  }
`;
export const Title = styled.h3`
  font-weight: 800;
  margin-bottom: 10px;
  text-transform: capitalize;
  font-size: 1em;
  font-weight: 800;
`;

export const PopulationText = styled.span`
  display: block;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
export const RegionText = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  text-transform: capitalize;
`;
export const CapitalText = styled.span`
  display: block;
  font-size: 14px;
  text-transform: capitalize;
`;

export const Strong = styled.span`
  font-weight: 800;
`;
