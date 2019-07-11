import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;
  scrollbar-width: thin;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000047;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 40px;
  width: 100%;
  max-width: ${props => (props.size === 'big' ? 600 : 400)}px;

  h1,
  p {
    color: #000;
  }
`;
