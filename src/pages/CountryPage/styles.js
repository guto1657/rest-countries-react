import styled from 'styled-components';

export const Main = styled.main`
   max-width: 100%;
   padding: 0 calc(((100vw - 1168px) / 2));
   margin: 0 auto;

   @media (max-width: 768px) {
    padding: 0 30px;
}

  @media (max-width: 480px) {
    padding: 0 10px;
}
`;

export const Container = styled.div`
  max-width: 100%;
  margin-bottom: 5%;
`;
