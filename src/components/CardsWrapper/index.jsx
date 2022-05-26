import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';

export const CardsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 100%;
  margin-top: 50px;
  gap: 50px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 50px auto 0;
  }
`;

CardsWrapper.propTypes = {
  children: P.node.isRequired,
};
