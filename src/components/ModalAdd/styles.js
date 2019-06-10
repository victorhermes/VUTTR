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
  animation: 0.5s ${fadeGo};
  background: #fff;
  border-radius: 6px;
  padding: 40px;
  width: 100%;
  max-width: ${props => (props.size === 'big' ? 600 : 400)}px;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
    color: #170c3a;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > .tagName {
      color: #170c3a;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
    }

    > span {
      color: #e04848;
      margin: 5px 0 5px 0;
      padding: 0;
      font-size: 13px;
      display: flex;
    }

    > input {
      height: 40px;
    }

    > input,
    textarea {
      padding: 10px;
      border-radius: 3px;
      border: 1px solid #ebeaed;
      background-color: #f5f4f6;
      color: #170c3a;
      margin-top: 8px;
      transition: border 0.15s ease;
      font-size: 16px;
      resize: vertical;

      &:focus {
        border-color: #3392ff;
      }
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
  }
`;
