import React from "react";
import Button from "../Button";
import Search from "../Search";
import IconClose from "./img/Icon-Close.svg";
import { Container, ToolSection, ToolHeader, Header } from "./styles";

const ListTools = () => (
    <Container>
        <Header>
            <Search />
            <Button />
        </Header>

        <ToolSection>
            <ToolHeader>
                <h1>Notion</h1>
                <img src={IconClose} alt="Remover" />
            </ToolHeader>

            <p>
                All in one to organize teams and ideas. Write, plan, collaborate
                and get organized.
            </p>
            <span>#organization #planning #collaboration #writing</span>
        </ToolSection>

        <ToolSection>
            <ToolHeader>
                <h1>Notion</h1>
                <img src={IconClose} alt="Remover" />
            </ToolHeader>

            <p>
                All in one to organize teams and ideas. Write, plan, collaborate
                and get organized.
            </p>
            <span>#organization #planning #collaboration #writing</span>
        </ToolSection>
    </Container>
);

export default ListTools;
