import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeGo = keyframes`${fadeIn}`;

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
  animation: 0.2s ${fadeGo};
  background: #fff;
  margin: 10px;
  border-radius: 6px;
  padding: 20px;
  width: 100%;
  max-width: ${props => (props.size === 'big' ? 600 : 400)}px;

  h1 {
    font-size: 26px;
    font-weight: 500;
    margin: 0 0 10px;
    color: #170c3a;
  }

  p {
    color: #000;
  }

  .button {
    display: flex;
    flex-direction: row-reverse;

    button:first-child {
      background: #365df0;
      color: #ffffff;
    }

    button {
      background: transparent;
      color: #365df0;
      margin: 35px 0 0 10px;
      height: 40px;
      font-size: 18px;
      padding: 0 20px 0 20px;
    }
  }
`;
