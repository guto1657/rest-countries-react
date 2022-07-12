import React from 'react';
import P from 'prop-types';
import {
  SectionWrapper,
  CountryName,
  Picture,
  Heading,
  Btn,
  Row,
  Colum_1,
  Colum_2,
  Col_2,
  InfoWrapper,
  InfoName,
  InfoData,
  BordersWrapper,
  BorderTitle,
  BordersList,
  BorderLink,
  BorderListItem,
} from './countrySectionElements';
import * as styled from './countrySectionElements';
import { ErrorMessage } from '../ErrorMessage';
import { useAppContext } from '../../contexts/AppContext';

export const CountrySection = ({ params }) => {
  const [appState, actions] = useAppContext();
  const { darkMode, allCountries } = appState;

  const {
    name = {},
    flags = {},
    population = 0,
    region = '',
    subregion = '',
    capital = '',
    currencies = {},
    languages = {},
    borders = [],
    tld = '',
  } = params[0];

  let borderItems = [];

  if (params) {
    Object.keys(allCountries).map((c) => {
      for (let i = 0; i < borders.length; i++) {
        if (borders[i] === allCountries[c].cca3) {
          borderItems[i] = allCountries[c];
        }
      }
    });
  }

  return (
    <SectionWrapper>
      <Heading>
        <Btn dark={appState.darkMode ? 1 : 0} to="/home">
          &#x2190; back
        </Btn>
      </Heading>
      <Row>
        <Colum_1>
          <Picture src={flags?.png} />
        </Colum_1>
        <Colum_2>
          <CountryName dark={appState.darkMode ? 1 : 0}>
            {name?.common}
          </CountryName>
          <Row>
            <Col_2 dark={appState.darkMode ? 1 : 0}>
              <InfoWrapper>
                <InfoName>Native Name:</InfoName>
                <InfoData>{Object.values(name?.nativeName)[0].common}</InfoData>
              </InfoWrapper>
              <InfoWrapper>
                <InfoName>Population:</InfoName>
                <InfoData>{population?.toLocaleString()}</InfoData>
              </InfoWrapper>
              <InfoWrapper>
                <InfoName>Region:</InfoName>
                <InfoData>{region}</InfoData>
              </InfoWrapper>
              <InfoWrapper>
                <InfoName>Sub Region:</InfoName>
                <InfoData>{subregion}</InfoData>
              </InfoWrapper>
              <InfoWrapper>
                <InfoName>Capital</InfoName>
                <InfoData>{capital}</InfoData>
              </InfoWrapper>
            </Col_2>
            <Col_2 dark={appState.darkMode ? 1 : 0}>
              <InfoWrapper>
                <InfoName>Top Level Domain:</InfoName>
                <InfoData>{tld[0]}</InfoData>
              </InfoWrapper>
              <InfoWrapper>
                <InfoName>Currencies:</InfoName>
                {Object?.keys(currencies)?.map((item, i) => (
                  <InfoData key={i}>
                    {`${currencies[item].name} `}
                    {Object.keys(currencies).length > 1 &&
                    currencies[item] !=
                      currencies[
                        Object.keys(currencies)[
                          Object.keys(currencies).length - 1
                        ]
                      ]
                      ? `, `
                      : ''}
                  </InfoData>
                ))}
              </InfoWrapper>
              <InfoWrapper>
                <InfoName>Languages</InfoName>
                {Object?.keys(languages)?.map((item, i) => (
                  <InfoData key={i}>
                    {`${languages[item]} `}
                    {Object.keys(languages).length > 0 &&
                    languages[item] !=
                      languages[
                        Object.keys(languages)[
                          Object.keys(languages).length - 1
                        ]
                      ]
                      ? `, `
                      : ''}
                  </InfoData>
                ))}
              </InfoWrapper>
            </Col_2>
          </Row>
          <BordersWrapper>
            <BordersList>
              <BorderTitle dark={appState.darkMode ? 1 : 0}>
                Border Countries:
              </BorderTitle>
              {borderItems?.map((b, i) => (
                <BorderListItem key={i} big={borderItems.length >= 4 ? 1 : 0}>
                  <BorderLink
                    dark={appState.darkMode ? 1 : 0}
                    to={`../country/${b.cca3}`}
                  >
                    {b.name.common}
                  </BorderLink>
                </BorderListItem>
              ))}
            </BordersList>
          </BordersWrapper>
        </Colum_2>
      </Row>
    </SectionWrapper>
  );
};

CountrySection.propTypes = {
  params: P.array,
};
