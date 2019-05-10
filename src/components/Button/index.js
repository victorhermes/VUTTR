import React from "react";
import IconPlusCircle from "./img/Icon-Plus-Circle.svg";
import { Container } from "./styles";

const Button = () => (
    <Container>
        <button>
            <img src={IconPlusCircle} alt="Adicionar item" />
        </button>
    </Container>
);

export default Button;
