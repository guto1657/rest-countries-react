import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: hsl(200, 15%, 8%);
  flex-direction: column;
  text-align: center;

  &.dark {
    color: #fff;
  }
`;

export const Message = styled.h1`
  font-size: 5em;
  font-weight: 800;
  margin-top: 100px;
  line-height: 110%;

  @media (max-width:768px) {
    font-size: 2.5em;
    font-weight: 800;
    margin-top: 100px;
    line-height: 110%;
  }
`;

export const Information = styled.p`
color: hsl(0, 0%, 52%);
  font-size: 1.4em;
  line-height: 120%;
  margin-top: 12px;

  @media (max-width:768px) {
    color: hsl(0, 0%, 52%);
    font-size: 1em;
    line-height: 120%;
    margin-top: 12px;
  }
`;

export const Button = styled(Link)`
  color: #fff;
  background: hsl(200, 15%, 8%);
  margin-top: 30px;
  padding: 12px 24px;
  border-radius: 50px;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: hsl(200, 15%, 8%);
    background: transparent;
    border: 1px solid hsl(200, 15%, 8%);
    transition: 0.3s all ease-in-out;
  }

  ${ErrorWrapper}.dark & {
    color: hsl(200, 15%, 8%);
    background: #fff;
  }

  ${ErrorWrapper}.dark &:hover {
    color: #fff;
  background: transparent;
  border: 1px solid #fff;
  }
`;
