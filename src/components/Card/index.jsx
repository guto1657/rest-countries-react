import React from 'react';
import {
  Container,
  Picture,
  Title,
  ContentWrapper,
  PopulationText,
  Strong,
  RegionText,
  CapitalText,
} from './CardsElements';
import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';

export const Card = ({ url = '', title = '', population = '', region = '', capital = [], countryIndex = '' }) => {
  const [appState, actions] = useAppContext();

  return (
    <Container to={`country/${countryIndex}`}>
      <Picture src={url} />
      <ContentWrapper dark={appState.darkMode ? 1 : 0}>
        <Title>{title}</Title>
        <PopulationText>
          <Strong>Population:</Strong> {population.toLocaleString()}
        </PopulationText>
        <RegionText>
          <Strong>Region:</Strong> {region}
        </RegionText>
        <CapitalText>
          <Strong>Capital:</Strong> {capital[0]}
        </CapitalText>
      </ContentWrapper>
    </Container>
  );
};

Card.propTypes = {
  url: P.string,
  title: P.string,
  population: P.number,
  region: P.string,
  capital: P.array,
  countryIndex: P.string,
};
