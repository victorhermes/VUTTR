import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  margin: 10px;
`;

export const Header = styled.div`
  padding: 20px 0 20px 0;
  width: 100%;
  max-width: 550px;

  img {
    width: 190px;
  }

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 17px;
  }
`;
