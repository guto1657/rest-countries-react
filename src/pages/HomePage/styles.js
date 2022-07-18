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

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
