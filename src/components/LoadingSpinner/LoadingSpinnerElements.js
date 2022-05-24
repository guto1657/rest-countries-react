import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid #fff;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
