import styled from "styled-components";

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
    background-color: #ffffff;
    margin: 10px;
    padding: 15px;
    color: #000;
    border-radius: 5px;

    h1 {
        padding-bottom: 10px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        padding-top: 15px;

        span {
            list-style: none;
            color: #31225f;
            font-weight: bold;
            padding-right: 10px;
        }
    }
`;

export const ToolHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

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
