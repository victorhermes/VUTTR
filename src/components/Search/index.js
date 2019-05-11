import React from "react";
import { Container } from "./styles";

const Search = () => (
    <Container>
        <input type="text" placeholder="Procurar ferramenta" />
        <div>
            <input type="checkbox" checked="checked" />
            <p>Procurar por tags?</p>
        </div>
    </Container>
);

export default Search;
