import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  margin: 10px;
  width: 100%;
  max-width: 550px;
`;

export const ToolSection = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 10px;
  padding: 15px;
  color: #000;
  border-radius: 5px;

  h1 {
    padding-bottom: 10px;
  }
`;

export const ToolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: #31225f;
  }

  img {
    width: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;

  span {
    list-style: none;
    color: #31225f;
    font-weight: bold;
    padding-right: 10px;
    text-transform: lowercase;
  }
`;

export const Search = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  input:first-child {
    border: 0;
    border-radius: 100px;
    height: 30px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 10px 0px;
    outline: currentcolor none 0px;
    padding: 12px;
    font-size: 15px;
  }

  div {
    display: flex;

    @media (max-width: 480px) {
      margin: 15px 15px 10px 0;
    }

    p {
      padding-top: 3px;
    }

    input[type='checkbox'] {
      margin: 0 15px 10px 15px;

      @media (max-width: 480px) {
        margin: 0 15px 10px 0;
      }
    }
  }
`;
