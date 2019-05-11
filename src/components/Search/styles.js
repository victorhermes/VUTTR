import styled from "styled-components";

export const Container = styled.div`
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

        input[type="checkbox"] {
            margin: 0 15px 10px 15px;

            @media (max-width: 480px) {
                margin: 0 15px 10px 0;
            }
        }
    }
`;
