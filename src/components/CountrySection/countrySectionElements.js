import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionWrapper = styled.div`
  width: 100%;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Heading = styled.div`
  margin: 60px 0;
`;
export const Btn = styled(Link)`
  padding: 7px 24px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(200, 15%, 8%)')};
  background: ${({ dark }) => (dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  font-weight: 600;
  text-transform: capitalize;
`;

export const Colum_1 = styled.div`
  flex-basis: 43%;
  margin-bottom: 5%;
  width: 100%;
`;

export const Colum_2 = styled.div`
  flex-basis: 48%;
  margin-bottom: 5%;
  width: 100%;
`;

export const Col_2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 48%;
  margin-bottom: 5%;
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(200, 15%, 8%)')};
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: fill;

  @media screen and (max-width: 480px) {
    height: 250px;
  }
`;

export const CountryName = styled.h1`
  font-weight: 800;
  margin: 30px 0 30px;
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(200, 15%, 8%)')};
`;

export const InfoWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoName = styled.span`
  font-weight: 600;
  margin-right: 7px;
  display: inline-block;
  opacity: 1;
`;

export const InfoData = styled.span`
  font-size: 1em;
  display: block;
  margin-bottom: 7px;
  opacity: 0.8;
`;

export const BordersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const BorderTitle = styled.li`
  font-weight: 600;
  margin-right: 7px;
  display: inline-block;
  white-space: nowrap;
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(200, 15%, 8%)')};

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 7px;
    display: block;
  }
`;
export const BordersList = styled.ul``;
export const BorderListItem = styled.li`
  display: inline-block;
  margin: ${({ big }) => (big ? '0.5em' : '0 0.5em')};
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: 0.3s all ease-in-out;
  }

  @media screen and (max-width: 768px) {
    margin: 12px 0.5em;
  }
`;

export const BorderLink = styled(Link)`
  color: ${({ dark }) => (dark ? '#fff' : 'hsl(200, 15%, 8%)')};
  padding: 4px 16px;
  background: ${({ dark }) => (dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)')};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-weight: 300;
`;
